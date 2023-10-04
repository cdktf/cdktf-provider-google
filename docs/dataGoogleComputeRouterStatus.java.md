# `data_google_compute_router_status`

Refer to the Terraform Registory for docs: [`data_google_compute_router_status`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status).

# `dataGoogleComputeRouterStatus` Submodule <a name="`dataGoogleComputeRouterStatus` Submodule" id="@cdktf/provider-google.dataGoogleComputeRouterStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRouterStatus <a name="DataGoogleComputeRouterStatus" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status google_compute_router_status}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatus;

DataGoogleComputeRouterStatus.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the router to query. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status#id DataGoogleComputeRouterStatus#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Project ID of the target router. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region of the target router. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the router to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status#name DataGoogleComputeRouterStatus#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status#id DataGoogleComputeRouterStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Project ID of the target router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status#project DataGoogleComputeRouterStatus#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region of the target router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status#region DataGoogleComputeRouterStatus#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatus;

DataGoogleComputeRouterStatus.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatus;

DataGoogleComputeRouterStatus.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatus;

DataGoogleComputeRouterStatus.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutes">bestRoutes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList">DataGoogleComputeRouterStatusBestRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutesForRouter">bestRoutesForRouter</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList">DataGoogleComputeRouterStatusBestRoutesForRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `bestRoutes`<sup>Required</sup> <a name="bestRoutes" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutes"></a>

```java
public DataGoogleComputeRouterStatusBestRoutesList getBestRoutes();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList">DataGoogleComputeRouterStatusBestRoutesList</a>

---

##### `bestRoutesForRouter`<sup>Required</sup> <a name="bestRoutesForRouter" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutesForRouter"></a>

```java
public DataGoogleComputeRouterStatusBestRoutesForRouterList getBestRoutesForRouter();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList">DataGoogleComputeRouterStatusBestRoutesForRouterList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRouterStatusBestRoutes <a name="DataGoogleComputeRouterStatusBestRoutes" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatusBestRoutes;

DataGoogleComputeRouterStatusBestRoutes.builder()
    .build();
```


### DataGoogleComputeRouterStatusBestRoutesForRouter <a name="DataGoogleComputeRouterStatusBestRoutesForRouter" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatusBestRoutesForRouter;

DataGoogleComputeRouterStatusBestRoutesForRouter.builder()
    .build();
```


### DataGoogleComputeRouterStatusConfig <a name="DataGoogleComputeRouterStatusConfig" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatusConfig;

DataGoogleComputeRouterStatusConfig.builder()
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the router to query. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status#id DataGoogleComputeRouterStatus#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.project">project</a></code> | <code>java.lang.String</code> | Project ID of the target router. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region of the target router. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the router to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status#name DataGoogleComputeRouterStatus#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status#id DataGoogleComputeRouterStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Project ID of the target router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status#project DataGoogleComputeRouterStatus#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region of the target router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/compute_router_status#region DataGoogleComputeRouterStatus#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRouterStatusBestRoutesForRouterList <a name="DataGoogleComputeRouterStatusBestRoutesForRouterList" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatusBestRoutesForRouterList;

new DataGoogleComputeRouterStatusBestRoutesForRouterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.get"></a>

```java
public DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference;

new DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.destRange">destRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopGateway">nextHopGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIlb">nextHopIlb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstance">nextHopInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstanceZone">nextHopInstanceZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIp">nextHopIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopNetwork">nextHopNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopVpnTunnel">nextHopVpnTunnel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter">DataGoogleComputeRouterStatusBestRoutesForRouter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destRange`<sup>Required</sup> <a name="destRange" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.destRange"></a>

```java
public java.lang.String getDestRange();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `nextHopGateway`<sup>Required</sup> <a name="nextHopGateway" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopGateway"></a>

```java
public java.lang.String getNextHopGateway();
```

- *Type:* java.lang.String

---

##### `nextHopIlb`<sup>Required</sup> <a name="nextHopIlb" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIlb"></a>

```java
public java.lang.String getNextHopIlb();
```

- *Type:* java.lang.String

---

##### `nextHopInstance`<sup>Required</sup> <a name="nextHopInstance" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstance"></a>

```java
public java.lang.String getNextHopInstance();
```

- *Type:* java.lang.String

---

##### `nextHopInstanceZone`<sup>Required</sup> <a name="nextHopInstanceZone" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstanceZone"></a>

```java
public java.lang.String getNextHopInstanceZone();
```

- *Type:* java.lang.String

---

##### `nextHopIp`<sup>Required</sup> <a name="nextHopIp" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIp"></a>

```java
public java.lang.String getNextHopIp();
```

- *Type:* java.lang.String

---

##### `nextHopNetwork`<sup>Required</sup> <a name="nextHopNetwork" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopNetwork"></a>

```java
public java.lang.String getNextHopNetwork();
```

- *Type:* java.lang.String

---

##### `nextHopVpnTunnel`<sup>Required</sup> <a name="nextHopVpnTunnel" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopVpnTunnel"></a>

```java
public java.lang.String getNextHopVpnTunnel();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRouterStatusBestRoutesForRouter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter">DataGoogleComputeRouterStatusBestRoutesForRouter</a>

---


### DataGoogleComputeRouterStatusBestRoutesList <a name="DataGoogleComputeRouterStatusBestRoutesList" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatusBestRoutesList;

new DataGoogleComputeRouterStatusBestRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.get"></a>

```java
public DataGoogleComputeRouterStatusBestRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRouterStatusBestRoutesOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesOutputReference" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_router_status.DataGoogleComputeRouterStatusBestRoutesOutputReference;

new DataGoogleComputeRouterStatusBestRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.destRange">destRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopGateway">nextHopGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIlb">nextHopIlb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstance">nextHopInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstanceZone">nextHopInstanceZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIp">nextHopIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopNetwork">nextHopNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopVpnTunnel">nextHopVpnTunnel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes">DataGoogleComputeRouterStatusBestRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destRange`<sup>Required</sup> <a name="destRange" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.destRange"></a>

```java
public java.lang.String getDestRange();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `nextHopGateway`<sup>Required</sup> <a name="nextHopGateway" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopGateway"></a>

```java
public java.lang.String getNextHopGateway();
```

- *Type:* java.lang.String

---

##### `nextHopIlb`<sup>Required</sup> <a name="nextHopIlb" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIlb"></a>

```java
public java.lang.String getNextHopIlb();
```

- *Type:* java.lang.String

---

##### `nextHopInstance`<sup>Required</sup> <a name="nextHopInstance" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstance"></a>

```java
public java.lang.String getNextHopInstance();
```

- *Type:* java.lang.String

---

##### `nextHopInstanceZone`<sup>Required</sup> <a name="nextHopInstanceZone" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstanceZone"></a>

```java
public java.lang.String getNextHopInstanceZone();
```

- *Type:* java.lang.String

---

##### `nextHopIp`<sup>Required</sup> <a name="nextHopIp" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIp"></a>

```java
public java.lang.String getNextHopIp();
```

- *Type:* java.lang.String

---

##### `nextHopNetwork`<sup>Required</sup> <a name="nextHopNetwork" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopNetwork"></a>

```java
public java.lang.String getNextHopNetwork();
```

- *Type:* java.lang.String

---

##### `nextHopVpnTunnel`<sup>Required</sup> <a name="nextHopVpnTunnel" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopVpnTunnel"></a>

```java
public java.lang.String getNextHopVpnTunnel();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRouterStatusBestRoutes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes">DataGoogleComputeRouterStatusBestRoutes</a>

---



