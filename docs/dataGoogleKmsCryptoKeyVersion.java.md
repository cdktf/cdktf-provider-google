# `dataGoogleKmsCryptoKeyVersion` Submodule <a name="`dataGoogleKmsCryptoKeyVersion` Submodule" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKeyVersion <a name="DataGoogleKmsCryptoKeyVersion" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version google_kms_crypto_key_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_version.DataGoogleKmsCryptoKeyVersion;

DataGoogleKmsCryptoKeyVersion.Builder.create(Construct scope, java.lang.String id)
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
    .cryptoKey(java.lang.String)
//  .id(java.lang.String)
//  .version(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#crypto_key DataGoogleKmsCryptoKeyVersion#crypto_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#id DataGoogleKmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.version">version</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#version DataGoogleKmsCryptoKeyVersion#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.cryptoKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#crypto_key DataGoogleKmsCryptoKeyVersion#crypto_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#id DataGoogleKmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.version"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#version DataGoogleKmsCryptoKeyVersion#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetId"></a>

```java
public void resetId()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_version.DataGoogleKmsCryptoKeyVersion;

DataGoogleKmsCryptoKeyVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_version.DataGoogleKmsCryptoKeyVersion;

DataGoogleKmsCryptoKeyVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_version.DataGoogleKmsCryptoKeyVersion;

DataGoogleKmsCryptoKeyVersion.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_version.DataGoogleKmsCryptoKeyVersion;

DataGoogleKmsCryptoKeyVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleKmsCryptoKeyVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleKmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleKmsCryptoKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleKmsCryptoKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsCryptoKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList">DataGoogleKmsCryptoKeyVersionPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.publicKey"></a>

```java
public DataGoogleKmsCryptoKeyVersionPublicKeyList getPublicKey();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList">DataGoogleKmsCryptoKeyVersionPublicKeyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKeyInput"></a>

```java
public java.lang.String getCryptoKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeyVersionConfig <a name="DataGoogleKmsCryptoKeyVersionConfig" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_version.DataGoogleKmsCryptoKeyVersionConfig;

DataGoogleKmsCryptoKeyVersionConfig.builder()
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
    .cryptoKey(java.lang.String)
//  .id(java.lang.String)
//  .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#crypto_key DataGoogleKmsCryptoKeyVersion#crypto_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#id DataGoogleKmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.version">version</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#version DataGoogleKmsCryptoKeyVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#crypto_key DataGoogleKmsCryptoKeyVersion#crypto_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#id DataGoogleKmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/kms_crypto_key_version#version DataGoogleKmsCryptoKeyVersion#version}.

---

### DataGoogleKmsCryptoKeyVersionPublicKey <a name="DataGoogleKmsCryptoKeyVersionPublicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_version.DataGoogleKmsCryptoKeyVersionPublicKey;

DataGoogleKmsCryptoKeyVersionPublicKey.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeyVersionPublicKeyList <a name="DataGoogleKmsCryptoKeyVersionPublicKeyList" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_version.DataGoogleKmsCryptoKeyVersionPublicKeyList;

new DataGoogleKmsCryptoKeyVersionPublicKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.get"></a>

```java
public DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference <a name="DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_version.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference;

new DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.pem">pem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey">DataGoogleKmsCryptoKeyVersionPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.pem"></a>

```java
public java.lang.String getPem();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleKmsCryptoKeyVersionPublicKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey">DataGoogleKmsCryptoKeyVersionPublicKey</a>

---



