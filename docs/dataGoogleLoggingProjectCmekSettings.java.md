# `dataGoogleLoggingProjectCmekSettings` Submodule <a name="`dataGoogleLoggingProjectCmekSettings` Submodule" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleLoggingProjectCmekSettings <a name="DataGoogleLoggingProjectCmekSettings" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings google_logging_project_cmek_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_logging_project_cmek_settings.DataGoogleLoggingProjectCmekSettings;

DataGoogleLoggingProjectCmekSettings.Builder.create(Construct scope, java.lang.String id)
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
    .project(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#project DataGoogleLoggingProjectCmekSettings#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#id DataGoogleLoggingProjectCmekSettings#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The resource name for the configured Cloud KMS key. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#project DataGoogleLoggingProjectCmekSettings#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#id DataGoogleLoggingProjectCmekSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#kms_key_name DataGoogleLoggingProjectCmekSettings#kms_key_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleLoggingProjectCmekSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_logging_project_cmek_settings.DataGoogleLoggingProjectCmekSettings;

DataGoogleLoggingProjectCmekSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_logging_project_cmek_settings.DataGoogleLoggingProjectCmekSettings;

DataGoogleLoggingProjectCmekSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_logging_project_cmek_settings.DataGoogleLoggingProjectCmekSettings;

DataGoogleLoggingProjectCmekSettings.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_logging_project_cmek_settings.DataGoogleLoggingProjectCmekSettings;

DataGoogleLoggingProjectCmekSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleLoggingProjectCmekSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleLoggingProjectCmekSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleLoggingProjectCmekSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleLoggingProjectCmekSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleLoggingProjectCmekSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.kmsKeyVersionName"></a>

```java
public java.lang.String getKmsKeyVersionName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleLoggingProjectCmekSettingsConfig <a name="DataGoogleLoggingProjectCmekSettingsConfig" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_logging_project_cmek_settings.DataGoogleLoggingProjectCmekSettingsConfig;

DataGoogleLoggingProjectCmekSettingsConfig.builder()
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
    .project(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#project DataGoogleLoggingProjectCmekSettings#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#id DataGoogleLoggingProjectCmekSettings#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The resource name for the configured Cloud KMS key. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#project DataGoogleLoggingProjectCmekSettings#project}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#id DataGoogleLoggingProjectCmekSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleLoggingProjectCmekSettings.DataGoogleLoggingProjectCmekSettingsConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/logging_project_cmek_settings#kms_key_name DataGoogleLoggingProjectCmekSettings#kms_key_name}

---



