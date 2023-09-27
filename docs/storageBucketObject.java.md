# `google_storage_bucket_object`

Refer to the Terraform Registory for docs: [`google_storage_bucket_object`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object).

# `storageBucketObject` Submodule <a name="`storageBucketObject` Submodule" id="@cdktf/provider-google.storageBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucketObject <a name="StorageBucketObject" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object google_storage_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket_object.StorageBucketObject;

StorageBucketObject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .name(java.lang.String)
//  .cacheControl(java.lang.String)
//  .content(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .customerEncryption(StorageBucketObjectCustomerEncryption)
//  .detectMd5Hash(java.lang.String)
//  .eventBasedHold(java.lang.Boolean)
//  .eventBasedHold(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .source(java.lang.String)
//  .storageClass(java.lang.String)
//  .temporaryHold(java.lang.Boolean)
//  .temporaryHold(IResolvable)
//  .timeouts(StorageBucketObjectTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Content-Encoding of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8". |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.customerEncryption">customerEncryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | customer_encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.detectMd5Hash">detectMd5Hash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.eventBasedHold">eventBasedHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an object is under event-based hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Resource name of the Cloud KMS key that will be used to encrypt the object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | A path to the data you want to upload. Must be defined if content is not. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The StorageClass of the new bucket object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.temporaryHold">temporaryHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an object is under temporary hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#bucket StorageBucketObject#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#name StorageBucketObject#name}

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.cacheControl"></a>

- *Type:* java.lang.String

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#cache_control StorageBucketObject#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#content StorageBucketObject#content}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentDisposition"></a>

- *Type:* java.lang.String

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#content_disposition StorageBucketObject#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentEncoding"></a>

- *Type:* java.lang.String

Content-Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#content_encoding StorageBucketObject#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentLanguage"></a>

- *Type:* java.lang.String

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#content_language StorageBucketObject#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#content_type StorageBucketObject#content_type}

---

##### `customerEncryption`<sup>Optional</sup> <a name="customerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.customerEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

customer_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#customer_encryption StorageBucketObject#customer_encryption}

---

##### `detectMd5Hash`<sup>Optional</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.detectMd5Hash"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}.

---

##### `eventBasedHold`<sup>Optional</sup> <a name="eventBasedHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.eventBasedHold"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an object is under event-based hold.

Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#event_based_hold StorageBucketObject#event_based_hold}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

Resource name of the Cloud KMS key that will be used to encrypt the object.

Overrides the object metadata's kmsKeyName value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#kms_key_name StorageBucketObject#kms_key_name}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#metadata StorageBucketObject#metadata}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.source"></a>

- *Type:* java.lang.String

A path to the data you want to upload. Must be defined if content is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#source StorageBucketObject#source}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.storageClass"></a>

- *Type:* java.lang.String

The StorageClass of the new bucket object.

Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#storage_class StorageBucketObject#storage_class}

---

##### `temporaryHold`<sup>Optional</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.temporaryHold"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an object is under temporary hold.

While this flag is set to true, the object is protected against deletion and overwrites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#temporary_hold StorageBucketObject#temporary_hold}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#timeouts StorageBucketObject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption">putCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCustomerEncryption">resetCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetDetectMd5Hash">resetDetectMd5Hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetEventBasedHold">resetEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTemporaryHold">resetTemporaryHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCustomerEncryption` <a name="putCustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption"></a>

```java
public void putCustomerEncryption(StorageBucketObjectCustomerEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putCustomerEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts"></a>

```java
public void putTimeouts(StorageBucketObjectTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

---

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCacheControl"></a>

```java
public void resetCacheControl()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentLanguage"></a>

```java
public void resetContentLanguage()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetCustomerEncryption` <a name="resetCustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetCustomerEncryption"></a>

```java
public void resetCustomerEncryption()
```

##### `resetDetectMd5Hash` <a name="resetDetectMd5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetDetectMd5Hash"></a>

```java
public void resetDetectMd5Hash()
```

##### `resetEventBasedHold` <a name="resetEventBasedHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetEventBasedHold"></a>

```java
public void resetEventBasedHold()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetSource"></a>

```java
public void resetSource()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetStorageClass"></a>

```java
public void resetStorageClass()
```

##### `resetTemporaryHold` <a name="resetTemporaryHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTemporaryHold"></a>

```java
public void resetTemporaryHold()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket_object.StorageBucketObject;

StorageBucketObject.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket_object.StorageBucketObject;

StorageBucketObject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket_object.StorageBucketObject;

StorageBucketObject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.crc32C">crc32C</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryption">customerEncryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference">StorageBucketObjectCustomerEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.md5Hash">md5Hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.mediaLink">mediaLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.outputName">outputName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference">StorageBucketObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControlInput">cacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguageInput">contentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryptionInput">customerEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5HashInput">detectMd5HashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHoldInput">eventBasedHoldInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHoldInput">temporaryHoldInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5Hash">detectMd5Hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHold">eventBasedHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHold">temporaryHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `crc32C`<sup>Required</sup> <a name="crc32C" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.crc32C"></a>

```java
public java.lang.String getCrc32C();
```

- *Type:* java.lang.String

---

##### `customerEncryption`<sup>Required</sup> <a name="customerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryption"></a>

```java
public StorageBucketObjectCustomerEncryptionOutputReference getCustomerEncryption();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference">StorageBucketObjectCustomerEncryptionOutputReference</a>

---

##### `md5Hash`<sup>Required</sup> <a name="md5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.md5Hash"></a>

```java
public java.lang.String getMd5Hash();
```

- *Type:* java.lang.String

---

##### `mediaLink`<sup>Required</sup> <a name="mediaLink" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.mediaLink"></a>

```java
public java.lang.String getMediaLink();
```

- *Type:* java.lang.String

---

##### `outputName`<sup>Required</sup> <a name="outputName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.outputName"></a>

```java
public java.lang.String getOutputName();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeouts"></a>

```java
public StorageBucketObjectTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference">StorageBucketObjectTimeoutsOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControlInput"></a>

```java
public java.lang.String getCacheControlInput();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguageInput"></a>

```java
public java.lang.String getContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `customerEncryptionInput`<sup>Optional</sup> <a name="customerEncryptionInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.customerEncryptionInput"></a>

```java
public StorageBucketObjectCustomerEncryption getCustomerEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---

##### `detectMd5HashInput`<sup>Optional</sup> <a name="detectMd5HashInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5HashInput"></a>

```java
public java.lang.String getDetectMd5HashInput();
```

- *Type:* java.lang.String

---

##### `eventBasedHoldInput`<sup>Optional</sup> <a name="eventBasedHoldInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHoldInput"></a>

```java
public java.lang.Object getEventBasedHoldInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `temporaryHoldInput`<sup>Optional</sup> <a name="temporaryHoldInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHoldInput"></a>

```java
public java.lang.Object getTemporaryHoldInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `detectMd5Hash`<sup>Required</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.detectMd5Hash"></a>

```java
public java.lang.String getDetectMd5Hash();
```

- *Type:* java.lang.String

---

##### `eventBasedHold`<sup>Required</sup> <a name="eventBasedHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.eventBasedHold"></a>

```java
public java.lang.Object getEventBasedHold();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `temporaryHold`<sup>Required</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.temporaryHold"></a>

```java
public java.lang.Object getTemporaryHold();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketObjectConfig <a name="StorageBucketObjectConfig" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket_object.StorageBucketObjectConfig;

StorageBucketObjectConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .name(java.lang.String)
//  .cacheControl(java.lang.String)
//  .content(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .customerEncryption(StorageBucketObjectCustomerEncryption)
//  .detectMd5Hash(java.lang.String)
//  .eventBasedHold(java.lang.Boolean)
//  .eventBasedHold(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .source(java.lang.String)
//  .storageClass(java.lang.String)
//  .temporaryHold(java.lang.Boolean)
//  .temporaryHold(IResolvable)
//  .timeouts(StorageBucketObjectTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.content">content</a></code> | <code>java.lang.String</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Content-Encoding of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8". |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.customerEncryption">customerEncryption</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | customer_encryption block. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.detectMd5Hash">detectMd5Hash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.eventBasedHold">eventBasedHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an object is under event-based hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Resource name of the Cloud KMS key that will be used to encrypt the object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.source">source</a></code> | <code>java.lang.String</code> | A path to the data you want to upload. Must be defined if content is not. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | The StorageClass of the new bucket object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.temporaryHold">temporaryHold</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether an object is under temporary hold. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#bucket StorageBucketObject#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#name StorageBucketObject#name}

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#cache_control StorageBucketObject#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#content StorageBucketObject#content}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#content_disposition StorageBucketObject#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Content-Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#content_encoding StorageBucketObject#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#content_language StorageBucketObject#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#content_type StorageBucketObject#content_type}

---

##### `customerEncryption`<sup>Optional</sup> <a name="customerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.customerEncryption"></a>

```java
public StorageBucketObjectCustomerEncryption getCustomerEncryption();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

customer_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#customer_encryption StorageBucketObject#customer_encryption}

---

##### `detectMd5Hash`<sup>Optional</sup> <a name="detectMd5Hash" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.detectMd5Hash"></a>

```java
public java.lang.String getDetectMd5Hash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#detect_md5hash StorageBucketObject#detect_md5hash}.

---

##### `eventBasedHold`<sup>Optional</sup> <a name="eventBasedHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.eventBasedHold"></a>

```java
public java.lang.Object getEventBasedHold();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an object is under event-based hold.

Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#event_based_hold StorageBucketObject#event_based_hold}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#id StorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Resource name of the Cloud KMS key that will be used to encrypt the object.

Overrides the object metadata's kmsKeyName value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#kms_key_name StorageBucketObject#kms_key_name}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#metadata StorageBucketObject#metadata}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

A path to the data you want to upload. Must be defined if content is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#source StorageBucketObject#source}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

The StorageClass of the new bucket object.

Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#storage_class StorageBucketObject#storage_class}

---

##### `temporaryHold`<sup>Optional</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.temporaryHold"></a>

```java
public java.lang.Object getTemporaryHold();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether an object is under temporary hold.

While this flag is set to true, the object is protected against deletion and overwrites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#temporary_hold StorageBucketObject#temporary_hold}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectConfig.property.timeouts"></a>

```java
public StorageBucketObjectTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#timeouts StorageBucketObject#timeouts}

---

### StorageBucketObjectCustomerEncryption <a name="StorageBucketObjectCustomerEncryption" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket_object.StorageBucketObjectCustomerEncryption;

StorageBucketObjectCustomerEncryption.builder()
    .encryptionKey(java.lang.String)
//  .encryptionAlgorithm(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | Base64 encoded customer supplied encryption key. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | The encryption algorithm. Default: AES256. |

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

Base64 encoded customer supplied encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#encryption_key StorageBucketObject#encryption_key}

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

The encryption algorithm. Default: AES256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#encryption_algorithm StorageBucketObject#encryption_algorithm}

---

### StorageBucketObjectTimeouts <a name="StorageBucketObjectTimeouts" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket_object.StorageBucketObjectTimeouts;

StorageBucketObjectTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#create StorageBucketObject#create}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#delete StorageBucketObject#delete}. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#update StorageBucketObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#create StorageBucketObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#delete StorageBucketObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/storage_bucket_object#update StorageBucketObject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBucketObjectCustomerEncryptionOutputReference <a name="StorageBucketObjectCustomerEncryptionOutputReference" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket_object.StorageBucketObjectCustomerEncryptionOutputReference;

new StorageBucketObjectCustomerEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```java
public void resetEncryptionAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```java
public java.lang.String getEncryptionAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput"></a>

```java
public java.lang.String getEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey"></a>

```java
public java.lang.String getEncryptionKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryptionOutputReference.property.internalValue"></a>

```java
public StorageBucketObjectCustomerEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectCustomerEncryption">StorageBucketObjectCustomerEncryption</a>

---


### StorageBucketObjectTimeoutsOutputReference <a name="StorageBucketObjectTimeoutsOutputReference" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_bucket_object.StorageBucketObjectTimeoutsOutputReference;

new StorageBucketObjectTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageBucketObject.StorageBucketObjectTimeouts">StorageBucketObjectTimeouts</a>

---



