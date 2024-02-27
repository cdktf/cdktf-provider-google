# `dataGoogleComputeMachineTypes` Submodule <a name="`dataGoogleComputeMachineTypes` Submodule" id="@cdktf/provider-google.dataGoogleComputeMachineTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeMachineTypes <a name="DataGoogleComputeMachineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types google_compute_machine_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypes;

DataGoogleComputeMachineTypes.Builder.create(Construct scope, java.lang.String id)
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
//  .project(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Project ID for this request. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The name of the zone for this request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Project ID for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#project DataGoogleComputeMachineTypes#project}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#zone DataGoogleComputeMachineTypes#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetProject"></a>

```java
public void resetProject()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeMachineTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypes;

DataGoogleComputeMachineTypes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypes;

DataGoogleComputeMachineTypes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypes;

DataGoogleComputeMachineTypes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypes;

DataGoogleComputeMachineTypes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeMachineTypes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleComputeMachineTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeMachineTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeMachineTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeMachineTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.machineTypes">machineTypes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList">DataGoogleComputeMachineTypesMachineTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `machineTypes`<sup>Required</sup> <a name="machineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.machineTypes"></a>

```java
public DataGoogleComputeMachineTypesMachineTypesList getMachineTypes();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList">DataGoogleComputeMachineTypesMachineTypesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeMachineTypesConfig <a name="DataGoogleComputeMachineTypesConfig" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypesConfig;

DataGoogleComputeMachineTypesConfig.builder()
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
//  .project(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.project">project</a></code> | <code>java.lang.String</code> | Project ID for this request. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The name of the zone for this request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Project ID for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#project DataGoogleComputeMachineTypes#project}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/compute_machine_types#zone DataGoogleComputeMachineTypes#zone}

---

### DataGoogleComputeMachineTypesMachineTypes <a name="DataGoogleComputeMachineTypesMachineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypesMachineTypes;

DataGoogleComputeMachineTypesMachineTypes.builder()
    .build();
```


### DataGoogleComputeMachineTypesMachineTypesAccelerators <a name="DataGoogleComputeMachineTypesMachineTypesAccelerators" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypesMachineTypesAccelerators;

DataGoogleComputeMachineTypesMachineTypesAccelerators.builder()
    .build();
```


### DataGoogleComputeMachineTypesMachineTypesDeprecated <a name="DataGoogleComputeMachineTypesMachineTypesDeprecated" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypesMachineTypesDeprecated;

DataGoogleComputeMachineTypesMachineTypesDeprecated.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeMachineTypesMachineTypesAcceleratorsList <a name="DataGoogleComputeMachineTypesMachineTypesAcceleratorsList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList;

new DataGoogleComputeMachineTypesMachineTypesAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get"></a>

```java
public DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference;

new DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorCount">guestAcceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorType">guestAcceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators">DataGoogleComputeMachineTypesMachineTypesAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guestAcceleratorCount`<sup>Required</sup> <a name="guestAcceleratorCount" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorCount"></a>

```java
public java.lang.Number getGuestAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `guestAcceleratorType`<sup>Required</sup> <a name="guestAcceleratorType" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorType"></a>

```java
public java.lang.String getGuestAcceleratorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeMachineTypesMachineTypesAccelerators getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators">DataGoogleComputeMachineTypesMachineTypesAccelerators</a>

---


### DataGoogleComputeMachineTypesMachineTypesDeprecatedList <a name="DataGoogleComputeMachineTypesMachineTypesDeprecatedList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypesMachineTypesDeprecatedList;

new DataGoogleComputeMachineTypesMachineTypesDeprecatedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get"></a>

```java
public DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference;

new DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.replacement">replacement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated">DataGoogleComputeMachineTypesMachineTypesDeprecated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.replacement"></a>

```java
public java.lang.String getReplacement();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeMachineTypesMachineTypesDeprecated getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated">DataGoogleComputeMachineTypesMachineTypesDeprecated</a>

---


### DataGoogleComputeMachineTypesMachineTypesList <a name="DataGoogleComputeMachineTypesMachineTypesList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypesMachineTypesList;

new DataGoogleComputeMachineTypesMachineTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get"></a>

```java
public DataGoogleComputeMachineTypesMachineTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeMachineTypesMachineTypesOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_machine_types.DataGoogleComputeMachineTypesMachineTypesOutputReference;

new DataGoogleComputeMachineTypesMachineTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList">DataGoogleComputeMachineTypesMachineTypesAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.deprecated">deprecated</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList">DataGoogleComputeMachineTypesMachineTypesDeprecatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.guestCpus">guestCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.isSharedCpus">isSharedCpus</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisks">maximumPersistentDisks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisksSizeGb">maximumPersistentDisksSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.memoryMb">memoryMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes">DataGoogleComputeMachineTypesMachineTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.accelerators"></a>

```java
public DataGoogleComputeMachineTypesMachineTypesAcceleratorsList getAccelerators();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList">DataGoogleComputeMachineTypesMachineTypesAcceleratorsList</a>

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.deprecated"></a>

```java
public DataGoogleComputeMachineTypesMachineTypesDeprecatedList getDeprecated();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList">DataGoogleComputeMachineTypesMachineTypesDeprecatedList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `guestCpus`<sup>Required</sup> <a name="guestCpus" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.guestCpus"></a>

```java
public java.lang.Number getGuestCpus();
```

- *Type:* java.lang.Number

---

##### `isSharedCpus`<sup>Required</sup> <a name="isSharedCpus" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.isSharedCpus"></a>

```java
public IResolvable getIsSharedCpus();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `maximumPersistentDisks`<sup>Required</sup> <a name="maximumPersistentDisks" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisks"></a>

```java
public java.lang.Number getMaximumPersistentDisks();
```

- *Type:* java.lang.Number

---

##### `maximumPersistentDisksSizeGb`<sup>Required</sup> <a name="maximumPersistentDisksSizeGb" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisksSizeGb"></a>

```java
public java.lang.Number getMaximumPersistentDisksSizeGb();
```

- *Type:* java.lang.Number

---

##### `memoryMb`<sup>Required</sup> <a name="memoryMb" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.memoryMb"></a>

```java
public java.lang.Number getMemoryMb();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeMachineTypesMachineTypes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes">DataGoogleComputeMachineTypesMachineTypes</a>

---



