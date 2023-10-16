# `data_google_compute_instance_template`

Refer to the Terraform Registory for docs: [`data_google_compute_instance_template`](https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template).

# `dataGoogleComputeInstanceTemplate` Submodule <a name="`dataGoogleComputeInstanceTemplate` Submodule" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInstanceTemplate <a name="DataGoogleComputeInstanceTemplate" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template google_compute_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplate;

DataGoogleComputeInstanceTemplate.Builder.create(Construct scope, java.lang.String id)
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
//  .selfLinkUnique(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#filter DataGoogleComputeInstanceTemplate#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#id DataGoogleComputeInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#most_recent DataGoogleComputeInstanceTemplate#most_recent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.selfLinkUnique">selfLinkUnique</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#self_link_unique DataGoogleComputeInstanceTemplate#self_link_unique}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#filter DataGoogleComputeInstanceTemplate#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#id DataGoogleComputeInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.mostRecent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#most_recent DataGoogleComputeInstanceTemplate#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#name DataGoogleComputeInstanceTemplate#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#project DataGoogleComputeInstanceTemplate#project}

---

##### `selfLinkUnique`<sup>Optional</sup> <a name="selfLinkUnique" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.selfLinkUnique"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#self_link_unique DataGoogleComputeInstanceTemplate#self_link_unique}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetSelfLinkUnique">resetSelfLinkUnique</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetMostRecent"></a>

```java
public void resetMostRecent()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetSelfLinkUnique` <a name="resetSelfLinkUnique" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetSelfLinkUnique"></a>

```java
public void resetSelfLinkUnique()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplate;

DataGoogleComputeInstanceTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplate;

DataGoogleComputeInstanceTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplate;

DataGoogleComputeInstanceTemplate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList">DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.canIpForward">canIpForward</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList">DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList">DataGoogleComputeInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.guestAccelerator">guestAccelerator</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList">DataGoogleComputeInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.instanceDescription">instanceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadataFingerprint">metadataFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadataStartupScript">metadataStartupScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.minCpuPlatform">minCpuPlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList">DataGoogleComputeInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList">DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList">DataGoogleComputeInstanceTemplateReservationAffinityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList">DataGoogleComputeInstanceTemplateSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList">DataGoogleComputeInstanceTemplateServiceAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList">DataGoogleComputeInstanceTemplateShieldedInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tagsFingerprint">tagsFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.mostRecentInput">mostRecentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLinkUniqueInput">selfLinkUniqueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLinkUnique">selfLinkUnique</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.advancedMachineFeatures"></a>

```java
public DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList getAdvancedMachineFeatures();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList">DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList</a>

---

##### `canIpForward`<sup>Required</sup> <a name="canIpForward" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.canIpForward"></a>

```java
public IResolvable getCanIpForward();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `confidentialInstanceConfig`<sup>Required</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.confidentialInstanceConfig"></a>

```java
public DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList getConfidentialInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList">DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.disk"></a>

```java
public DataGoogleComputeInstanceTemplateDiskList getDisk();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList">DataGoogleComputeInstanceTemplateDiskList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `guestAccelerator`<sup>Required</sup> <a name="guestAccelerator" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.guestAccelerator"></a>

```java
public DataGoogleComputeInstanceTemplateGuestAcceleratorList getGuestAccelerator();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList">DataGoogleComputeInstanceTemplateGuestAcceleratorList</a>

---

##### `instanceDescription`<sup>Required</sup> <a name="instanceDescription" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.instanceDescription"></a>

```java
public java.lang.String getInstanceDescription();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `metadataFingerprint`<sup>Required</sup> <a name="metadataFingerprint" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadataFingerprint"></a>

```java
public java.lang.String getMetadataFingerprint();
```

- *Type:* java.lang.String

---

##### `metadataStartupScript`<sup>Required</sup> <a name="metadataStartupScript" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadataStartupScript"></a>

```java
public java.lang.String getMetadataStartupScript();
```

- *Type:* java.lang.String

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.minCpuPlatform"></a>

```java
public java.lang.String getMinCpuPlatform();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.networkInterface"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList">DataGoogleComputeInstanceTemplateNetworkInterfaceList</a>

---

##### `networkPerformanceConfig`<sup>Required</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.networkPerformanceConfig"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList getNetworkPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList">DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.reservationAffinity"></a>

```java
public DataGoogleComputeInstanceTemplateReservationAffinityList getReservationAffinity();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList">DataGoogleComputeInstanceTemplateReservationAffinityList</a>

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.scheduling"></a>

```java
public DataGoogleComputeInstanceTemplateSchedulingList getScheduling();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList">DataGoogleComputeInstanceTemplateSchedulingList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.serviceAccount"></a>

```java
public DataGoogleComputeInstanceTemplateServiceAccountList getServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList">DataGoogleComputeInstanceTemplateServiceAccountList</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.shieldedInstanceConfig"></a>

```java
public DataGoogleComputeInstanceTemplateShieldedInstanceConfigList getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList">DataGoogleComputeInstanceTemplateShieldedInstanceConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsFingerprint`<sup>Required</sup> <a name="tagsFingerprint" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tagsFingerprint"></a>

```java
public java.lang.String getTagsFingerprint();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.mostRecentInput"></a>

```java
public java.lang.Object getMostRecentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `selfLinkUniqueInput`<sup>Optional</sup> <a name="selfLinkUniqueInput" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLinkUniqueInput"></a>

```java
public java.lang.String getSelfLinkUniqueInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `selfLinkUnique`<sup>Required</sup> <a name="selfLinkUnique" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLinkUnique"></a>

```java
public java.lang.String getSelfLinkUnique();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInstanceTemplateAdvancedMachineFeatures <a name="DataGoogleComputeInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateAdvancedMachineFeatures;

DataGoogleComputeInstanceTemplateAdvancedMachineFeatures.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateConfidentialInstanceConfig <a name="DataGoogleComputeInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateConfidentialInstanceConfig;

DataGoogleComputeInstanceTemplateConfidentialInstanceConfig.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateConfig <a name="DataGoogleComputeInstanceTemplateConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateConfig;

DataGoogleComputeInstanceTemplateConfig.builder()
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
//  .selfLinkUnique(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#filter DataGoogleComputeInstanceTemplate#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#id DataGoogleComputeInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#most_recent DataGoogleComputeInstanceTemplate#most_recent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.selfLinkUnique">selfLinkUnique</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#self_link_unique DataGoogleComputeInstanceTemplate#self_link_unique}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#filter DataGoogleComputeInstanceTemplate#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#id DataGoogleComputeInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#most_recent DataGoogleComputeInstanceTemplate#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#name DataGoogleComputeInstanceTemplate#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#project DataGoogleComputeInstanceTemplate#project}

---

##### `selfLinkUnique`<sup>Optional</sup> <a name="selfLinkUnique" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.selfLinkUnique"></a>

```java
public java.lang.String getSelfLinkUnique();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/data-sources/compute_instance_template#self_link_unique DataGoogleComputeInstanceTemplate#self_link_unique}.

---

### DataGoogleComputeInstanceTemplateDisk <a name="DataGoogleComputeInstanceTemplateDisk" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDisk;

DataGoogleComputeInstanceTemplateDisk.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey <a name="DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey;

DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey <a name="DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey;

DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey;

DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateGuestAccelerator <a name="DataGoogleComputeInstanceTemplateGuestAccelerator" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAccelerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateGuestAccelerator;

DataGoogleComputeInstanceTemplateGuestAccelerator.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateNetworkInterface <a name="DataGoogleComputeInstanceTemplateNetworkInterface" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterface;

DataGoogleComputeInstanceTemplateNetworkInterface.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig;

DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange;

DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig;

DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateNetworkPerformanceConfig <a name="DataGoogleComputeInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkPerformanceConfig;

DataGoogleComputeInstanceTemplateNetworkPerformanceConfig.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateReservationAffinity <a name="DataGoogleComputeInstanceTemplateReservationAffinity" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateReservationAffinity;

DataGoogleComputeInstanceTemplateReservationAffinity.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation <a name="DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation;

DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateScheduling <a name="DataGoogleComputeInstanceTemplateScheduling" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateScheduling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateScheduling;

DataGoogleComputeInstanceTemplateScheduling.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout;

DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateSchedulingNodeAffinities <a name="DataGoogleComputeInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateSchedulingNodeAffinities;

DataGoogleComputeInstanceTemplateSchedulingNodeAffinities.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateServiceAccount <a name="DataGoogleComputeInstanceTemplateServiceAccount" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateServiceAccount;

DataGoogleComputeInstanceTemplateServiceAccount.builder()
    .build();
```


### DataGoogleComputeInstanceTemplateShieldedInstanceConfig <a name="DataGoogleComputeInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateShieldedInstanceConfig;

DataGoogleComputeInstanceTemplateShieldedInstanceConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList <a name="DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList;

new DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.get"></a>

```java
public DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference;

new DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visibleCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeatures">DataGoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```java
public IResolvable getEnableNestedVirtualization();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `visibleCoreCount`<sup>Required</sup> <a name="visibleCoreCount" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```java
public java.lang.Number getVisibleCoreCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateAdvancedMachineFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeatures">DataGoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

---


### DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList <a name="DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList;

new DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.get"></a>

```java
public DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference <a name="DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference;

new DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfig">DataGoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```java
public IResolvable getEnableConfidentialCompute();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateConfidentialInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfig">DataGoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

---


### DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList <a name="DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList;

new DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.get"></a>

```java
public DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference;

new DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey">DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey">DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

---


### DataGoogleComputeInstanceTemplateDiskList <a name="DataGoogleComputeInstanceTemplateDiskList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskList;

new DataGoogleComputeInstanceTemplateDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.get"></a>

```java
public DataGoogleComputeInstanceTemplateDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateDiskOutputReference <a name="DataGoogleComputeInstanceTemplateDiskOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskOutputReference;

new DataGoogleComputeInstanceTemplateDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.boot">boot</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskName">diskName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIops">provisionedIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceImage">sourceImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDisk">DataGoogleComputeInstanceTemplateDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```java
public IResolvable getAutoDelete();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.boot"></a>

```java
public IResolvable getBoot();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKey`<sup>Required</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```java
public DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList</a>

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `provisionedIops`<sup>Required</sup> <a name="provisionedIops" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```java
public java.lang.Number getProvisionedIops();
```

- *Type:* java.lang.Number

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```java
public java.lang.String getSourceImage();
```

- *Type:* java.lang.String

---

##### `sourceImageEncryptionKey`<sup>Required</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```java
public DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList getSourceImageEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList</a>

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```java
public java.lang.String getSourceSnapshot();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotEncryptionKey`<sup>Required</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```java
public DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDisk">DataGoogleComputeInstanceTemplateDisk</a>

---


### DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList <a name="DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList;

new DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.get"></a>

```java
public DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference;

new DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList <a name="DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList;

new DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get"></a>

```java
public DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference;

new DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### DataGoogleComputeInstanceTemplateGuestAcceleratorList <a name="DataGoogleComputeInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateGuestAcceleratorList;

new DataGoogleComputeInstanceTemplateGuestAcceleratorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.get"></a>

```java
public DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference <a name="DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference;

new DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAccelerator">DataGoogleComputeInstanceTemplateGuestAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateGuestAccelerator getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAccelerator">DataGoogleComputeInstanceTemplateGuestAccelerator</a>

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList;

new DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference;

new DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">natIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `natIp`<sup>Required</sup> <a name="natIp" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```java
public java.lang.String getNatIp();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList;

new DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference;

new DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```java
public java.lang.String getSubnetworkRangeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList;

new DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference;

new DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">externalIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">externalIpv6PrefixLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIpv6`<sup>Required</sup> <a name="externalIpv6" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```java
public java.lang.String getExternalIpv6();
```

- *Type:* java.lang.String

---

##### `externalIpv6PrefixLength`<sup>Required</sup> <a name="externalIpv6PrefixLength" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```java
public java.lang.String getExternalIpv6PrefixLength();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```java
public java.lang.String getPublicPtrDomainName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceList <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceList;

new DataGoogleComputeInstanceTemplateNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.get"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference;

new DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList">DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">aliasIpRange</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">networkIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType">nicType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">queueCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">subnetworkProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterface">DataGoogleComputeInstanceTemplateNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList getAccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList">DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `aliasIpRange`<sup>Required</sup> <a name="aliasIpRange" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList getAliasIpRange();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `internalIpv6PrefixLength`<sup>Required</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```java
public java.lang.Number getInternalIpv6PrefixLength();
```

- *Type:* java.lang.Number

---

##### `ipv6AccessConfig`<sup>Required</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList getIpv6AccessConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkIp`<sup>Required</sup> <a name="networkIp" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```java
public java.lang.String getNetworkIp();
```

- *Type:* java.lang.String

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

---

##### `queueCount`<sup>Required</sup> <a name="queueCount" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```java
public java.lang.Number getQueueCount();
```

- *Type:* java.lang.Number

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `subnetworkProject`<sup>Required</sup> <a name="subnetworkProject" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```java
public java.lang.String getSubnetworkProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkInterface getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterface">DataGoogleComputeInstanceTemplateNetworkInterface</a>

---


### DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList <a name="DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList;

new DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.get"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference <a name="DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference;

new DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfig">DataGoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```java
public java.lang.String getTotalEgressBandwidthTier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateNetworkPerformanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfig">DataGoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

---


### DataGoogleComputeInstanceTemplateReservationAffinityList <a name="DataGoogleComputeInstanceTemplateReservationAffinityList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateReservationAffinityList;

new DataGoogleComputeInstanceTemplateReservationAffinityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.get"></a>

```java
public DataGoogleComputeInstanceTemplateReservationAffinityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateReservationAffinityOutputReference <a name="DataGoogleComputeInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference;

new DataGoogleComputeInstanceTemplateReservationAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList">DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinity">DataGoogleComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```java
public DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList getSpecificReservation();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList">DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateReservationAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinity">DataGoogleComputeInstanceTemplateReservationAffinity</a>

---


### DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList <a name="DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList;

new DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.get"></a>

```java
public DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference;

new DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation">DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation">DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---


### DataGoogleComputeInstanceTemplateSchedulingList <a name="DataGoogleComputeInstanceTemplateSchedulingList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateSchedulingList;

new DataGoogleComputeInstanceTemplateSchedulingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.get"></a>

```java
public DataGoogleComputeInstanceTemplateSchedulingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList;

new DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```java
public DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference;

new DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>

---


### DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList <a name="DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList;

new DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```java
public DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference;

new DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinities">DataGoogleComputeInstanceTemplateSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateSchedulingNodeAffinities getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinities">DataGoogleComputeInstanceTemplateSchedulingNodeAffinities</a>

---


### DataGoogleComputeInstanceTemplateSchedulingOutputReference <a name="DataGoogleComputeInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateSchedulingOutputReference;

new DataGoogleComputeInstanceTemplateSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart">automaticRestart</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus">minNodeCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities">nodeAffinities</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList">DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">onHostMaintenance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateScheduling">DataGoogleComputeInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automaticRestart`<sup>Required</sup> <a name="automaticRestart" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```java
public IResolvable getAutomaticRestart();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `instanceTerminationAction`<sup>Required</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```java
public java.lang.String getInstanceTerminationAction();
```

- *Type:* java.lang.String

---

##### `localSsdRecoveryTimeout`<sup>Required</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```java
public DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList getLocalSsdRecoveryTimeout();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `minNodeCpus`<sup>Required</sup> <a name="minNodeCpus" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```java
public java.lang.Number getMinNodeCpus();
```

- *Type:* java.lang.Number

---

##### `nodeAffinities`<sup>Required</sup> <a name="nodeAffinities" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```java
public DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList getNodeAffinities();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList">DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `onHostMaintenance`<sup>Required</sup> <a name="onHostMaintenance" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```java
public java.lang.String getOnHostMaintenance();
```

- *Type:* java.lang.String

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```java
public IResolvable getPreemptible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```java
public java.lang.String getProvisioningModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateScheduling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateScheduling">DataGoogleComputeInstanceTemplateScheduling</a>

---


### DataGoogleComputeInstanceTemplateServiceAccountList <a name="DataGoogleComputeInstanceTemplateServiceAccountList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateServiceAccountList;

new DataGoogleComputeInstanceTemplateServiceAccountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.get"></a>

```java
public DataGoogleComputeInstanceTemplateServiceAccountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateServiceAccountOutputReference <a name="DataGoogleComputeInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateServiceAccountOutputReference;

new DataGoogleComputeInstanceTemplateServiceAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccount">DataGoogleComputeInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateServiceAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccount">DataGoogleComputeInstanceTemplateServiceAccount</a>

---


### DataGoogleComputeInstanceTemplateShieldedInstanceConfigList <a name="DataGoogleComputeInstanceTemplateShieldedInstanceConfigList" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList;

new DataGoogleComputeInstanceTemplateShieldedInstanceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.get"></a>

```java
public DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference <a name="DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_compute_instance_template.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference;

new DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfig">DataGoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public IResolvable getEnableIntegrityMonitoring();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public IResolvable getEnableSecureBoot();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```java
public IResolvable getEnableVtpm();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeInstanceTemplateShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfig">DataGoogleComputeInstanceTemplateShieldedInstanceConfig</a>

---



