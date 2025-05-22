# `dataGoogleStorageObjectSignedUrl` Submodule <a name="`dataGoogleStorageObjectSignedUrl` Submodule" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageObjectSignedUrl <a name="DataGoogleStorageObjectSignedUrl" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url google_storage_object_signed_url}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_storage_object_signed_url.DataGoogleStorageObjectSignedUrl;

DataGoogleStorageObjectSignedUrl.Builder.create(Construct scope, java.lang.String id)
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
    .path(java.lang.String)
//  .contentMd5(java.lang.String)
//  .contentType(java.lang.String)
//  .credentials(java.lang.String)
//  .duration(java.lang.String)
//  .extensionHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .httpMethod(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.contentMd5">contentMd5</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.extensionHeaders">extensionHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}.

---

##### `contentMd5`<sup>Optional</sup> <a name="contentMd5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.contentMd5"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.credentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.duration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}.

---

##### `extensionHeaders`<sup>Optional</sup> <a name="extensionHeaders" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.extensionHeaders"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}.

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.httpMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentMd5">resetContentMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetExtensionHeaders">resetExtensionHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetContentMd5` <a name="resetContentMd5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentMd5"></a>

```java
public void resetContentMd5()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetExtensionHeaders` <a name="resetExtensionHeaders" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetExtensionHeaders"></a>

```java
public void resetExtensionHeaders()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageObjectSignedUrl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_storage_object_signed_url.DataGoogleStorageObjectSignedUrl;

DataGoogleStorageObjectSignedUrl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_storage_object_signed_url.DataGoogleStorageObjectSignedUrl;

DataGoogleStorageObjectSignedUrl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_storage_object_signed_url.DataGoogleStorageObjectSignedUrl;

DataGoogleStorageObjectSignedUrl.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_storage_object_signed_url.DataGoogleStorageObjectSignedUrl;

DataGoogleStorageObjectSignedUrl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleStorageObjectSignedUrl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleStorageObjectSignedUrl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleStorageObjectSignedUrl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleStorageObjectSignedUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageObjectSignedUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.signedUrl">signedUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5Input">contentMd5Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentialsInput">credentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeadersInput">extensionHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5">contentMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentials">credentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeaders">extensionHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `signedUrl`<sup>Required</sup> <a name="signedUrl" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.signedUrl"></a>

```java
public java.lang.String getSignedUrl();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `contentMd5Input`<sup>Optional</sup> <a name="contentMd5Input" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5Input"></a>

```java
public java.lang.String getContentMd5Input();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentialsInput"></a>

```java
public java.lang.String getCredentialsInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `extensionHeadersInput`<sup>Optional</sup> <a name="extensionHeadersInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtensionHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentMd5"></a>

```java
public java.lang.String getContentMd5();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `extensionHeaders`<sup>Required</sup> <a name="extensionHeaders" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.extensionHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtensionHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageObjectSignedUrlConfig <a name="DataGoogleStorageObjectSignedUrlConfig" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_storage_object_signed_url.DataGoogleStorageObjectSignedUrlConfig;

DataGoogleStorageObjectSignedUrlConfig.builder()
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
    .path(java.lang.String)
//  .contentMd5(java.lang.String)
//  .contentType(java.lang.String)
//  .credentials(java.lang.String)
//  .duration(java.lang.String)
//  .extensionHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .httpMethod(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentMd5">contentMd5</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.extensionHeaders">extensionHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}.

---

##### `contentMd5`<sup>Optional</sup> <a name="contentMd5" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentMd5"></a>

```java
public java.lang.String getContentMd5();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}.

---

##### `extensionHeaders`<sup>Optional</sup> <a name="extensionHeaders" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.extensionHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtensionHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}.

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageObjectSignedUrl.DataGoogleStorageObjectSignedUrlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



