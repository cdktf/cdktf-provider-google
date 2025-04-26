# `dataGoogleSecretManagerRegionalSecrets` Submodule <a name="`dataGoogleSecretManagerRegionalSecrets` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerRegionalSecrets <a name="DataGoogleSecretManagerRegionalSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets google_secret_manager_regional_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecrets;

DataGoogleSecretManagerRegionalSecrets.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#location DataGoogleSecretManagerRegionalSecrets#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all regional secrets are listed from the specified location. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#id DataGoogleSecretManagerRegionalSecrets#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#project DataGoogleSecretManagerRegionalSecrets#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#location DataGoogleSecretManagerRegionalSecrets#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all regional secrets are listed from the specified location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#filter DataGoogleSecretManagerRegionalSecrets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#id DataGoogleSecretManagerRegionalSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#project DataGoogleSecretManagerRegionalSecrets#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecrets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecrets;

DataGoogleSecretManagerRegionalSecrets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecrets;

DataGoogleSecretManagerRegionalSecrets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecrets;

DataGoogleSecretManagerRegionalSecrets.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecrets;

DataGoogleSecretManagerRegionalSecrets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleSecretManagerRegionalSecrets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecrets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleSecretManagerRegionalSecrets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleSecretManagerRegionalSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerRegionalSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList">DataGoogleSecretManagerRegionalSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.secrets"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsList getSecrets();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList">DataGoogleSecretManagerRegionalSecretsSecretsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerRegionalSecretsConfig <a name="DataGoogleSecretManagerRegionalSecretsConfig" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsConfig;

DataGoogleSecretManagerRegionalSecretsConfig.builder()
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
    .location(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#location DataGoogleSecretManagerRegionalSecrets#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all regional secrets are listed from the specified location. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#id DataGoogleSecretManagerRegionalSecrets#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#project DataGoogleSecretManagerRegionalSecrets#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#location DataGoogleSecretManagerRegionalSecrets#location}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all regional secrets are listed from the specified location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#filter DataGoogleSecretManagerRegionalSecrets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#id DataGoogleSecretManagerRegionalSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/secret_manager_regional_secrets#project DataGoogleSecretManagerRegionalSecrets#project}.

---

### DataGoogleSecretManagerRegionalSecretsSecrets <a name="DataGoogleSecretManagerRegionalSecretsSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecrets;

DataGoogleSecretManagerRegionalSecretsSecrets.builder()
    .build();
```


### DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption <a name="DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption;

DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption.builder()
    .build();
```


### DataGoogleSecretManagerRegionalSecretsSecretsRotation <a name="DataGoogleSecretManagerRegionalSecretsSecretsRotation" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation;

DataGoogleSecretManagerRegionalSecretsSecretsRotation.builder()
    .build();
```


### DataGoogleSecretManagerRegionalSecretsSecretsTopics <a name="DataGoogleSecretManagerRegionalSecretsSecretsTopics" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics;

DataGoogleSecretManagerRegionalSecretsSecretsTopics.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList <a name="DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList;

new DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.get"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference;

new DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerRegionalSecretsSecretsList <a name="DataGoogleSecretManagerRegionalSecretsSecretsList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsList;

new DataGoogleSecretManagerRegionalSecretsSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.get"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSecretManagerRegionalSecretsSecretsOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference;

new DataGoogleSecretManagerRegionalSecretsSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.annotations">annotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.customerManagedEncryption">customerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.rotation">rotation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList">DataGoogleSecretManagerRegionalSecretsSecretsRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.topics">topics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList">DataGoogleSecretManagerRegionalSecretsSecretsTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionAliases">versionAliases</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionDestroyTtl">versionDestroyTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets">DataGoogleSecretManagerRegionalSecretsSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `customerManagedEncryption`<sup>Required</sup> <a name="customerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.customerManagedEncryption"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList getCustomerManagedEncryption();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.rotation"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsRotationList getRotation();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList">DataGoogleSecretManagerRegionalSecretsSecretsRotationList</a>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.topics"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsTopicsList getTopics();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList">DataGoogleSecretManagerRegionalSecretsSecretsTopicsList</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `versionAliases`<sup>Required</sup> <a name="versionAliases" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionAliases"></a>

```java
public StringMap getVersionAliases();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `versionDestroyTtl`<sup>Required</sup> <a name="versionDestroyTtl" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionDestroyTtl"></a>

```java
public java.lang.String getVersionDestroyTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.internalValue"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecrets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets">DataGoogleSecretManagerRegionalSecretsSecrets</a>

---


### DataGoogleSecretManagerRegionalSecretsSecretsRotationList <a name="DataGoogleSecretManagerRegionalSecretsSecretsRotationList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList;

new DataGoogleSecretManagerRegionalSecretsSecretsRotationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.get"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference;

new DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.nextRotationTime">nextRotationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation">DataGoogleSecretManagerRegionalSecretsSecretsRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nextRotationTime`<sup>Required</sup> <a name="nextRotationTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.nextRotationTime"></a>

```java
public java.lang.String getNextRotationTime();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.internalValue"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsRotation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation">DataGoogleSecretManagerRegionalSecretsSecretsRotation</a>

---


### DataGoogleSecretManagerRegionalSecretsSecretsTopicsList <a name="DataGoogleSecretManagerRegionalSecretsSecretsTopicsList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList;

new DataGoogleSecretManagerRegionalSecretsSecretsTopicsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.get"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_secret_manager_regional_secrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference;

new DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics">DataGoogleSecretManagerRegionalSecretsSecretsTopics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.internalValue"></a>

```java
public DataGoogleSecretManagerRegionalSecretsSecretsTopics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics">DataGoogleSecretManagerRegionalSecretsSecretsTopics</a>

---



