'use client'

import Input from '@/app/components/Input';
import { useState } from 'react';

const CreateVideo = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [embedCode, setEmbedCode] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!videoUrl) return;
    const videoId = extractVideoId(videoUrl);
    if (!videoId) return;
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    setEmbedCode(`<iframe width="560" height="315" src="${embedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  };

  const extractVideoId = (url: any) => {
    const videoIdRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <Input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter YouTube video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Embed Video
        </button>
      </form>
      <div className="mt-8" dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  );
};

export default CreateVideo;
