# `google_compute_shared_vpc_host_project`

Refer to the Terraform Registory for docs: [`google_compute_shared_vpc_host_project`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project).

# `computeSharedVpcHostProject` Submodule <a name="`computeSharedVpcHostProject` Submodule" id="@cdktf/provider-google.computeSharedVpcHostProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSharedVpcHostProject <a name="ComputeSharedVpcHostProject" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project google_compute_shared_vpc_host_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_shared_vpc_host_project.ComputeSharedVpcHostProject;

ComputeSharedVpcHostProject.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(ComputeSharedVpcHostProjectTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project that will serve as a Shared VPC host project. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#id ComputeSharedVpcHostProject#id}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project that will serve as a Shared VPC host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#project ComputeSharedVpcHostProject#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#id ComputeSharedVpcHostProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#timeouts ComputeSharedVpcHostProject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.putTimeouts"></a>

```java
public void putTimeouts(ComputeSharedVpcHostProjectTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_shared_vpc_host_project.ComputeSharedVpcHostProject;

ComputeSharedVpcHostProject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_shared_vpc_host_project.ComputeSharedVpcHostProject;

ComputeSharedVpcHostProject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_shared_vpc_host_project.ComputeSharedVpcHostProject;

ComputeSharedVpcHostProject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference">ComputeSharedVpcHostProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.timeouts"></a>

```java
public ComputeSharedVpcHostProjectTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference">ComputeSharedVpcHostProjectTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSharedVpcHostProjectConfig <a name="ComputeSharedVpcHostProjectConfig" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_shared_vpc_host_project.ComputeSharedVpcHostProjectConfig;

ComputeSharedVpcHostProjectConfig.builder()
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
//  .timeouts(ComputeSharedVpcHostProjectTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project that will serve as a Shared VPC host project. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#id ComputeSharedVpcHostProject#id}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project that will serve as a Shared VPC host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#project ComputeSharedVpcHostProject#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#id ComputeSharedVpcHostProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.timeouts"></a>

```java
public ComputeSharedVpcHostProjectTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#timeouts ComputeSharedVpcHostProject#timeouts}

---

### ComputeSharedVpcHostProjectTimeouts <a name="ComputeSharedVpcHostProjectTimeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_shared_vpc_host_project.ComputeSharedVpcHostProjectTimeouts;

ComputeSharedVpcHostProjectTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#create ComputeSharedVpcHostProject#create}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#delete ComputeSharedVpcHostProject#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#create ComputeSharedVpcHostProject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_shared_vpc_host_project#delete ComputeSharedVpcHostProject#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSharedVpcHostProjectTimeoutsOutputReference <a name="ComputeSharedVpcHostProjectTimeoutsOutputReference" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_shared_vpc_host_project.ComputeSharedVpcHostProjectTimeoutsOutputReference;

new ComputeSharedVpcHostProjectTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>

---



