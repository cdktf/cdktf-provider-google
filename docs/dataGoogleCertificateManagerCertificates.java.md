# `dataGoogleCertificateManagerCertificates` Submodule <a name="`dataGoogleCertificateManagerCertificates` Submodule" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCertificateManagerCertificates <a name="DataGoogleCertificateManagerCertificates" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates google_certificate_manager_certificates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificates;

DataGoogleCertificateManagerCertificates.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#filter DataGoogleCertificateManagerCertificates#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#id DataGoogleCertificateManagerCertificates#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#region DataGoogleCertificateManagerCertificates#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#filter DataGoogleCertificateManagerCertificates#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#id DataGoogleCertificateManagerCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#region DataGoogleCertificateManagerCertificates#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCertificateManagerCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificates;

DataGoogleCertificateManagerCertificates.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificates;

DataGoogleCertificateManagerCertificates.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificates;

DataGoogleCertificateManagerCertificates.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificates;

DataGoogleCertificateManagerCertificates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCertificateManagerCertificates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleCertificateManagerCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCertificateManagerCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCertificateManagerCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCertificateManagerCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList">DataGoogleCertificateManagerCertificatesCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.certificates"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesList getCertificates();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList">DataGoogleCertificateManagerCertificatesCertificatesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificates.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCertificateManagerCertificatesCertificates <a name="DataGoogleCertificateManagerCertificatesCertificates" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificates;

DataGoogleCertificateManagerCertificatesCertificates.builder()
    .build();
```


### DataGoogleCertificateManagerCertificatesCertificatesManaged <a name="DataGoogleCertificateManagerCertificatesCertificatesManaged" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesManaged;

DataGoogleCertificateManagerCertificatesCertificatesManaged.builder()
    .build();
```


### DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo;

DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo.builder()
    .build();
```


### DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue;

DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue.builder()
    .build();
```


### DataGoogleCertificateManagerCertificatesConfig <a name="DataGoogleCertificateManagerCertificatesConfig" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesConfig;

DataGoogleCertificateManagerCertificatesConfig.builder()
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
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#filter DataGoogleCertificateManagerCertificates#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#id DataGoogleCertificateManagerCertificates#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#region DataGoogleCertificateManagerCertificates#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#filter DataGoogleCertificateManagerCertificates#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#id DataGoogleCertificateManagerCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/certificate_manager_certificates#region DataGoogleCertificateManagerCertificates#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCertificateManagerCertificatesCertificatesList <a name="DataGoogleCertificateManagerCertificatesCertificatesList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesList;

new DataGoogleCertificateManagerCertificatesCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.get"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList;

new DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.get"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference;

new DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoOutputReference.property.internalValue"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfo</a>

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedList <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList;

new DataGoogleCertificateManagerCertificatesCertificatesManagedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.get"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference;

new DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.authorizationAttemptInfo">authorizationAttemptInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.dnsAuthorizations">dnsAuthorizations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.issuanceConfig">issuanceConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.provisioningIssue">provisioningIssue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged">DataGoogleCertificateManagerCertificatesCertificatesManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationAttemptInfo`<sup>Required</sup> <a name="authorizationAttemptInfo" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.authorizationAttemptInfo"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList getAuthorizationAttemptInfo();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList">DataGoogleCertificateManagerCertificatesCertificatesManagedAuthorizationAttemptInfoList</a>

---

##### `dnsAuthorizations`<sup>Required</sup> <a name="dnsAuthorizations" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.dnsAuthorizations"></a>

```java
public java.util.List<java.lang.String> getDnsAuthorizations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuanceConfig`<sup>Required</sup> <a name="issuanceConfig" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.issuanceConfig"></a>

```java
public java.lang.String getIssuanceConfig();
```

- *Type:* java.lang.String

---

##### `provisioningIssue`<sup>Required</sup> <a name="provisioningIssue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.provisioningIssue"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList getProvisioningIssue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedOutputReference.property.internalValue"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesManaged getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManaged">DataGoogleCertificateManagerCertificatesCertificatesManaged</a>

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList;

new DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.get"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference;

new DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssueOutputReference.property.internalValue"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue">DataGoogleCertificateManagerCertificatesCertificatesManagedProvisioningIssue</a>

---


### DataGoogleCertificateManagerCertificatesCertificatesOutputReference <a name="DataGoogleCertificateManagerCertificatesCertificatesOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_certificate_manager_certificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference;

new DataGoogleCertificateManagerCertificatesCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList">DataGoogleCertificateManagerCertificatesCertificatesManagedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.sanDnsnames">sanDnsnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates">DataGoogleCertificateManagerCertificatesCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.managed"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificatesManagedList getManaged();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesManagedList">DataGoogleCertificateManagerCertificatesCertificatesManagedList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `sanDnsnames`<sup>Required</sup> <a name="sanDnsnames" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.sanDnsnames"></a>

```java
public java.util.List<java.lang.String> getSanDnsnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificatesOutputReference.property.internalValue"></a>

```java
public DataGoogleCertificateManagerCertificatesCertificates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificates.DataGoogleCertificateManagerCertificatesCertificates">DataGoogleCertificateManagerCertificatesCertificates</a>

---



