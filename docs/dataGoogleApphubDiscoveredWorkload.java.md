# `dataGoogleApphubDiscoveredWorkload` Submodule <a name="`dataGoogleApphubDiscoveredWorkload` Submodule" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApphubDiscoveredWorkload <a name="DataGoogleApphubDiscoveredWorkload" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload google_apphub_discovered_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkload;

DataGoogleApphubDiscoveredWorkload.Builder.create(Construct scope, java.lang.String id)
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
    .workloadUri(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.workloadUri">workloadUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}.

---

##### `workloadUri`<sup>Required</sup> <a name="workloadUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.workloadUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleApphubDiscoveredWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkload;

DataGoogleApphubDiscoveredWorkload.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkload;

DataGoogleApphubDiscoveredWorkload.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkload;

DataGoogleApphubDiscoveredWorkload.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkload;

DataGoogleApphubDiscoveredWorkload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleApphubDiscoveredWorkload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleApphubDiscoveredWorkload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleApphubDiscoveredWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleApphubDiscoveredWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApphubDiscoveredWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadProperties">workloadProperties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList">DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadReference">workloadReference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList">DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUriInput">workloadUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUri">workloadUri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `workloadProperties`<sup>Required</sup> <a name="workloadProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadProperties"></a>

```java
public DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList getWorkloadProperties();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList">DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList</a>

---

##### `workloadReference`<sup>Required</sup> <a name="workloadReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadReference"></a>

```java
public DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList getWorkloadReference();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList">DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `workloadUriInput`<sup>Optional</sup> <a name="workloadUriInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUriInput"></a>

```java
public java.lang.String getWorkloadUriInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `workloadUri`<sup>Required</sup> <a name="workloadUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUri"></a>

```java
public java.lang.String getWorkloadUri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApphubDiscoveredWorkloadConfig <a name="DataGoogleApphubDiscoveredWorkloadConfig" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkloadConfig;

DataGoogleApphubDiscoveredWorkloadConfig.builder()
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
    .workloadUri(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.workloadUri">workloadUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}.

---

##### `workloadUri`<sup>Required</sup> <a name="workloadUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.workloadUri"></a>

```java
public java.lang.String getWorkloadUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}.

---

### DataGoogleApphubDiscoveredWorkloadWorkloadProperties <a name="DataGoogleApphubDiscoveredWorkloadWorkloadProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties;

DataGoogleApphubDiscoveredWorkloadWorkloadProperties.builder()
    .build();
```


### DataGoogleApphubDiscoveredWorkloadWorkloadReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkloadWorkloadReference;

DataGoogleApphubDiscoveredWorkloadWorkloadReference.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList <a name="DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList;

new DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get"></a>

```java
public DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference;

new DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.gcpProject">gcpProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties">DataGoogleApphubDiscoveredWorkloadWorkloadProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcpProject`<sup>Required</sup> <a name="gcpProject" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.gcpProject"></a>

```java
public java.lang.String getGcpProject();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.internalValue"></a>

```java
public DataGoogleApphubDiscoveredWorkloadWorkloadProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties">DataGoogleApphubDiscoveredWorkloadWorkloadProperties</a>

---


### DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList;

new DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get"></a>

```java
public DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_workload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference;

new DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference">DataGoogleApphubDiscoveredWorkloadWorkloadReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.internalValue"></a>

```java
public DataGoogleApphubDiscoveredWorkloadWorkloadReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference">DataGoogleApphubDiscoveredWorkloadWorkloadReference</a>

---



