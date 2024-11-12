# `dataGoogleVmwareengineNetworkPeering` Submodule <a name="`dataGoogleVmwareengineNetworkPeering` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineNetworkPeering <a name="DataGoogleVmwareengineNetworkPeering" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering google_vmwareengine_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_network_peering.DataGoogleVmwareengineNetworkPeering;

DataGoogleVmwareengineNetworkPeering.Builder.create(Construct scope, java.lang.String id)
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
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the Network Peering. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#id DataGoogleVmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#project DataGoogleVmwareengineNetworkPeering#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#name DataGoogleVmwareengineNetworkPeering#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#id DataGoogleVmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#project DataGoogleVmwareengineNetworkPeering#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_network_peering.DataGoogleVmwareengineNetworkPeering;

DataGoogleVmwareengineNetworkPeering.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_network_peering.DataGoogleVmwareengineNetworkPeering;

DataGoogleVmwareengineNetworkPeering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_network_peering.DataGoogleVmwareengineNetworkPeering;

DataGoogleVmwareengineNetworkPeering.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_network_peering.DataGoogleVmwareengineNetworkPeering;

DataGoogleVmwareengineNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleVmwareengineNetworkPeering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleVmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleVmwareengineNetworkPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleVmwareengineNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.exportCustomRoutes">exportCustomRoutes</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp">exportCustomRoutesWithPublicIp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.importCustomRoutes">importCustomRoutes</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp">importCustomRoutesWithPublicIp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.peerNetwork">peerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.peerNetworkType">peerNetworkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.stateDetails">stateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical">vmwareEngineNetworkCanonical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `exportCustomRoutes`<sup>Required</sup> <a name="exportCustomRoutes" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.exportCustomRoutes"></a>

```java
public IResolvable getExportCustomRoutes();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `exportCustomRoutesWithPublicIp`<sup>Required</sup> <a name="exportCustomRoutesWithPublicIp" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp"></a>

```java
public IResolvable getExportCustomRoutesWithPublicIp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `importCustomRoutes`<sup>Required</sup> <a name="importCustomRoutes" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.importCustomRoutes"></a>

```java
public IResolvable getImportCustomRoutes();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `importCustomRoutesWithPublicIp`<sup>Required</sup> <a name="importCustomRoutesWithPublicIp" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp"></a>

```java
public IResolvable getImportCustomRoutesWithPublicIp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `peerNetwork`<sup>Required</sup> <a name="peerNetwork" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.peerNetwork"></a>

```java
public java.lang.String getPeerNetwork();
```

- *Type:* java.lang.String

---

##### `peerNetworkType`<sup>Required</sup> <a name="peerNetworkType" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.peerNetworkType"></a>

```java
public java.lang.String getPeerNetworkType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.stateDetails"></a>

```java
public java.lang.String getStateDetails();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.vmwareEngineNetwork"></a>

```java
public java.lang.String getVmwareEngineNetwork();
```

- *Type:* java.lang.String

---

##### `vmwareEngineNetworkCanonical`<sup>Required</sup> <a name="vmwareEngineNetworkCanonical" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical"></a>

```java
public java.lang.String getVmwareEngineNetworkCanonical();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineNetworkPeeringConfig <a name="DataGoogleVmwareengineNetworkPeeringConfig" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_vmwareengine_network_peering.DataGoogleVmwareengineNetworkPeeringConfig;

DataGoogleVmwareengineNetworkPeeringConfig.builder()
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
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the Network Peering. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#id DataGoogleVmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#project DataGoogleVmwareengineNetworkPeering#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#name DataGoogleVmwareengineNetworkPeering#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#id DataGoogleVmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleVmwareengineNetworkPeering.DataGoogleVmwareengineNetworkPeeringConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/vmwareengine_network_peering#project DataGoogleVmwareengineNetworkPeering#project}.

---



