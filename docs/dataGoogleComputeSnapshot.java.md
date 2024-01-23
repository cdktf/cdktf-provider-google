# `dataGoogleComputeSnapshot` Submodule <a name="`dataGoogleComputeSnapshot` Submodule" id="@cdktf/provider-google.dataGoogleComputeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeSnapshot <a name="DataGoogleComputeSnapshot" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot google_compute_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshot;

DataGoogleComputeSnapshot.Builder.create(Construct scope, java.lang.String id)
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
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .name(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#filter DataGoogleComputeSnapshot#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#id DataGoogleComputeSnapshot#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#most_recent DataGoogleComputeSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#project DataGoogleComputeSnapshot#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#filter DataGoogleComputeSnapshot#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#id DataGoogleComputeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.mostRecent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#most_recent DataGoogleComputeSnapshot#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#name DataGoogleComputeSnapshot#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#project DataGoogleComputeSnapshot#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetId"></a>

```java
public void resetId()
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetMostRecent"></a>

```java
public void resetMostRecent()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshot;

DataGoogleComputeSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshot;

DataGoogleComputeSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshot;

DataGoogleComputeSnapshot.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshot;

DataGoogleComputeSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleComputeSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.chainName">chainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.licenses">licenses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.snapshotEncryptionKey">snapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList">DataGoogleComputeSnapshotSnapshotEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.snapshotId">snapshotId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.sourceDisk">sourceDisk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.sourceDiskEncryptionKey">sourceDiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList">DataGoogleComputeSnapshotSourceDiskEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.storageBytes">storageBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.storageLocations">storageLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.mostRecentInput">mostRecentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `chainName`<sup>Required</sup> <a name="chainName" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.chainName"></a>

```java
public java.lang.String getChainName();
```

- *Type:* java.lang.String

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.licenses"></a>

```java
public java.util.List<java.lang.String> getLicenses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `snapshotEncryptionKey`<sup>Required</sup> <a name="snapshotEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.snapshotEncryptionKey"></a>

```java
public DataGoogleComputeSnapshotSnapshotEncryptionKeyList getSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList">DataGoogleComputeSnapshotSnapshotEncryptionKeyList</a>

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.snapshotId"></a>

```java
public java.lang.Number getSnapshotId();
```

- *Type:* java.lang.Number

---

##### `sourceDisk`<sup>Required</sup> <a name="sourceDisk" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.sourceDisk"></a>

```java
public java.lang.String getSourceDisk();
```

- *Type:* java.lang.String

---

##### `sourceDiskEncryptionKey`<sup>Required</sup> <a name="sourceDiskEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.sourceDiskEncryptionKey"></a>

```java
public DataGoogleComputeSnapshotSourceDiskEncryptionKeyList getSourceDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList">DataGoogleComputeSnapshotSourceDiskEncryptionKeyList</a>

---

##### `storageBytes`<sup>Required</sup> <a name="storageBytes" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.storageBytes"></a>

```java
public java.lang.Number getStorageBytes();
```

- *Type:* java.lang.Number

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.storageLocations"></a>

```java
public java.util.List<java.lang.String> getStorageLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.mostRecentInput"></a>

```java
public java.lang.Object getMostRecentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeSnapshotConfig <a name="DataGoogleComputeSnapshotConfig" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshotConfig;

DataGoogleComputeSnapshotConfig.builder()
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
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .name(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#filter DataGoogleComputeSnapshot#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#id DataGoogleComputeSnapshot#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#most_recent DataGoogleComputeSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#project DataGoogleComputeSnapshot#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#filter DataGoogleComputeSnapshot#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#id DataGoogleComputeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#most_recent DataGoogleComputeSnapshot#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#name DataGoogleComputeSnapshot#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/compute_snapshot#project DataGoogleComputeSnapshot#project}.

---

### DataGoogleComputeSnapshotSnapshotEncryptionKey <a name="DataGoogleComputeSnapshotSnapshotEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshotSnapshotEncryptionKey;

DataGoogleComputeSnapshotSnapshotEncryptionKey.builder()
    .build();
```


### DataGoogleComputeSnapshotSourceDiskEncryptionKey <a name="DataGoogleComputeSnapshotSourceDiskEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKey;

DataGoogleComputeSnapshotSourceDiskEncryptionKey.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeSnapshotSnapshotEncryptionKeyList <a name="DataGoogleComputeSnapshotSnapshotEncryptionKeyList" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList;

new DataGoogleComputeSnapshotSnapshotEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.get"></a>

```java
public DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference <a name="DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference;

new DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKey">DataGoogleComputeSnapshotSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeSnapshotSnapshotEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSnapshotEncryptionKey">DataGoogleComputeSnapshotSnapshotEncryptionKey</a>

---


### DataGoogleComputeSnapshotSourceDiskEncryptionKeyList <a name="DataGoogleComputeSnapshotSourceDiskEncryptionKeyList" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList;

new DataGoogleComputeSnapshotSourceDiskEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.get"></a>

```java
public DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference <a name="DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_snapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference;

new DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKey">DataGoogleComputeSnapshotSourceDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeSnapshotSourceDiskEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeSnapshot.DataGoogleComputeSnapshotSourceDiskEncryptionKey">DataGoogleComputeSnapshotSourceDiskEncryptionKey</a>

---



