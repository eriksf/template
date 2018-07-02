========
Usage
========

To use this template, simply update it::

	import read-the-docs-template


-----------------
Uploading a file:
-----------------

**CLI**

.. code:: text

    files-upload -v -F files/picksumipsum.txt -S api.tacc.cloud nryan

..

.. container:: solution

    .. container:: curl

        :fa:`caret-right`
        **cURL**

    .. code:: shell
      :class: foldable

        curl -sk -H "Authorization: Bearer $ACCESS_TOKEN" \
            -X POST \
            -F "fileToUpload=@files/picksumipsum.txt" \
            https://tacc.cloud/files/v2/media/api.tacc.cloud/nryan
