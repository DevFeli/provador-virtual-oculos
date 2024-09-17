<?php

class GetImages{

    private array $extensions = ['jpg', 'jpeg', 'png', 'gif'];

    private string $directory = './assets/oculos/';

    public function getImages(): array {
        $images = [];

        foreach($this->extensions as $extension){

            $path = $this->directory . '*.' . $extension;

            foreach(glob($path) as $image){
                $images[] = $image;
            }
        }

        return $images;
    }
}