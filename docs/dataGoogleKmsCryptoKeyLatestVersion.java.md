# `dataGoogleKmsCryptoKeyLatestVersion` Submodule <a name="`dataGoogleKmsCryptoKeyLatestVersion` Submodule" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKeyLatestVersion <a name="DataGoogleKmsCryptoKeyLatestVersion" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version google_kms_crypto_key_latest_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_latest_version.DataGoogleKmsCryptoKeyLatestVersion;

DataGoogleKmsCryptoKeyLatestVersion.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#crypto_key DataGoogleKmsCryptoKeyLatestVersion#crypto_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | The filter argument is used to add a filter query parameter that limits which type of cryptoKeyVersion is retrieved as the latest by the data source: ?filter={{filter}}. When no value is provided there is no filtering. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#id DataGoogleKmsCryptoKeyLatestVersion#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.cryptoKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#crypto_key DataGoogleKmsCryptoKeyLatestVersion#crypto_key}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

The filter argument is used to add a filter query parameter that limits which type of cryptoKeyVersion is retrieved as the latest by the data source: ?filter={{filter}}. When no value is provided there is no filtering.

Example filter values if filtering on state.

* "state:ENABLED" will retrieve the latest cryptoKeyVersion that has the state "ENABLED".

[See the documentation about using filters](https://cloud.google.com/kms/docs/sorting-and-filtering)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#filter DataGoogleKmsCryptoKeyLatestVersion#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#id DataGoogleKmsCryptoKeyLatestVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsCryptoKeyLatestVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_latest_version.DataGoogleKmsCryptoKeyLatestVersion;

DataGoogleKmsCryptoKeyLatestVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_latest_version.DataGoogleKmsCryptoKeyLatestVersion;

DataGoogleKmsCryptoKeyLatestVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_latest_version.DataGoogleKmsCryptoKeyLatestVersion;

DataGoogleKmsCryptoKeyLatestVersion.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_latest_version.DataGoogleKmsCryptoKeyLatestVersion;

DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleKmsCryptoKeyLatestVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleKmsCryptoKeyLatestVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleKmsCryptoKeyLatestVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsCryptoKeyLatestVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList">DataGoogleKmsCryptoKeyLatestVersionPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.publicKey"></a>

```java
public DataGoogleKmsCryptoKeyLatestVersionPublicKeyList getPublicKey();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList">DataGoogleKmsCryptoKeyLatestVersionPublicKeyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cryptoKeyInput"></a>

```java
public java.lang.String getCryptoKeyInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeyLatestVersionConfig <a name="DataGoogleKmsCryptoKeyLatestVersionConfig" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_latest_version.DataGoogleKmsCryptoKeyLatestVersionConfig;

DataGoogleKmsCryptoKeyLatestVersionConfig.builder()
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
//  .filter(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#crypto_key DataGoogleKmsCryptoKeyLatestVersion#crypto_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter argument is used to add a filter query parameter that limits which type of cryptoKeyVersion is retrieved as the latest by the data source: ?filter={{filter}}. When no value is provided there is no filtering. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#id DataGoogleKmsCryptoKeyLatestVersion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#crypto_key DataGoogleKmsCryptoKeyLatestVersion#crypto_key}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter argument is used to add a filter query parameter that limits which type of cryptoKeyVersion is retrieved as the latest by the data source: ?filter={{filter}}. When no value is provided there is no filtering.

Example filter values if filtering on state.

* "state:ENABLED" will retrieve the latest cryptoKeyVersion that has the state "ENABLED".

[See the documentation about using filters](https://cloud.google.com/kms/docs/sorting-and-filtering)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#filter DataGoogleKmsCryptoKeyLatestVersion#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/data-sources/kms_crypto_key_latest_version#id DataGoogleKmsCryptoKeyLatestVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleKmsCryptoKeyLatestVersionPublicKey <a name="DataGoogleKmsCryptoKeyLatestVersionPublicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_latest_version.DataGoogleKmsCryptoKeyLatestVersionPublicKey;

DataGoogleKmsCryptoKeyLatestVersionPublicKey.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeyLatestVersionPublicKeyList <a name="DataGoogleKmsCryptoKeyLatestVersionPublicKeyList" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_latest_version.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList;

new DataGoogleKmsCryptoKeyLatestVersionPublicKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.get"></a>

```java
public DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference <a name="DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_kms_crypto_key_latest_version.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference;

new DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.pem">pem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKey">DataGoogleKmsCryptoKeyLatestVersionPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.pem"></a>

```java
public java.lang.String getPem();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleKmsCryptoKeyLatestVersionPublicKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyLatestVersion.DataGoogleKmsCryptoKeyLatestVersionPublicKey">DataGoogleKmsCryptoKeyLatestVersionPublicKey</a>

---



