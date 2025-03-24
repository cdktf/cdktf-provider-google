# `dataGoogleCloudbuildTrigger` Submodule <a name="`dataGoogleCloudbuildTrigger` Submodule" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudbuildTrigger <a name="DataGoogleCloudbuildTrigger" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger google_cloudbuild_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTrigger;

DataGoogleCloudbuildTrigger.Builder.create(Construct scope, java.lang.String id)
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
    .triggerId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.triggerId">triggerId</a></code> | <code>java.lang.String</code> | The unique identifier for the trigger. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#id DataGoogleCloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#project DataGoogleCloudbuildTrigger#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#location DataGoogleCloudbuildTrigger#location}

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.triggerId"></a>

- *Type:* java.lang.String

The unique identifier for the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#trigger_id DataGoogleCloudbuildTrigger#trigger_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#id DataGoogleCloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#project DataGoogleCloudbuildTrigger#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudbuildTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTrigger;

DataGoogleCloudbuildTrigger.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTrigger;

DataGoogleCloudbuildTrigger.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTrigger;

DataGoogleCloudbuildTrigger.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTrigger;

DataGoogleCloudbuildTrigger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCloudbuildTrigger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleCloudbuildTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCloudbuildTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCloudbuildTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudbuildTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.approvalConfig">approvalConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList">DataGoogleCloudbuildTriggerApprovalConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.bitbucketServerTriggerConfig">bitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList">DataGoogleCloudbuildTriggerBuildList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.disabled">disabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.gitFileSource">gitFileSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList">DataGoogleCloudbuildTriggerGitFileSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.github">github</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList">DataGoogleCloudbuildTriggerGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.ignoredFiles">ignoredFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includeBuildLogs">includeBuildLogs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includedFiles">includedFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.pubsubConfig">pubsubConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList">DataGoogleCloudbuildTriggerPubsubConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.repositoryEventConfig">repositoryEventConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList">DataGoogleCloudbuildTriggerRepositoryEventConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.sourceToBuild">sourceToBuild</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList">DataGoogleCloudbuildTriggerSourceToBuildList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.substitutions">substitutions</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerTemplate">triggerTemplate</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList">DataGoogleCloudbuildTriggerTriggerTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.webhookConfig">webhookConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList">DataGoogleCloudbuildTriggerWebhookConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerIdInput">triggerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerId">triggerId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `approvalConfig`<sup>Required</sup> <a name="approvalConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.approvalConfig"></a>

```java
public DataGoogleCloudbuildTriggerApprovalConfigList getApprovalConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList">DataGoogleCloudbuildTriggerApprovalConfigList</a>

---

##### `bitbucketServerTriggerConfig`<sup>Required</sup> <a name="bitbucketServerTriggerConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.bitbucketServerTriggerConfig"></a>

```java
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList getBitbucketServerTriggerConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList</a>

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.buildAttribute"></a>

```java
public DataGoogleCloudbuildTriggerBuildList getBuildAttribute();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList">DataGoogleCloudbuildTriggerBuildList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.disabled"></a>

```java
public IResolvable getDisabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `gitFileSource`<sup>Required</sup> <a name="gitFileSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.gitFileSource"></a>

```java
public DataGoogleCloudbuildTriggerGitFileSourceList getGitFileSource();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList">DataGoogleCloudbuildTriggerGitFileSourceList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.github"></a>

```java
public DataGoogleCloudbuildTriggerGithubList getGithub();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList">DataGoogleCloudbuildTriggerGithubList</a>

---

##### `ignoredFiles`<sup>Required</sup> <a name="ignoredFiles" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.ignoredFiles"></a>

```java
public java.util.List<java.lang.String> getIgnoredFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeBuildLogs`<sup>Required</sup> <a name="includeBuildLogs" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includeBuildLogs"></a>

```java
public java.lang.String getIncludeBuildLogs();
```

- *Type:* java.lang.String

---

##### `includedFiles`<sup>Required</sup> <a name="includedFiles" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includedFiles"></a>

```java
public java.util.List<java.lang.String> getIncludedFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pubsubConfig`<sup>Required</sup> <a name="pubsubConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.pubsubConfig"></a>

```java
public DataGoogleCloudbuildTriggerPubsubConfigList getPubsubConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList">DataGoogleCloudbuildTriggerPubsubConfigList</a>

---

##### `repositoryEventConfig`<sup>Required</sup> <a name="repositoryEventConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.repositoryEventConfig"></a>

```java
public DataGoogleCloudbuildTriggerRepositoryEventConfigList getRepositoryEventConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList">DataGoogleCloudbuildTriggerRepositoryEventConfigList</a>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `sourceToBuild`<sup>Required</sup> <a name="sourceToBuild" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.sourceToBuild"></a>

```java
public DataGoogleCloudbuildTriggerSourceToBuildList getSourceToBuild();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList">DataGoogleCloudbuildTriggerSourceToBuildList</a>

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.substitutions"></a>

```java
public StringMap getSubstitutions();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `triggerTemplate`<sup>Required</sup> <a name="triggerTemplate" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerTemplate"></a>

```java
public DataGoogleCloudbuildTriggerTriggerTemplateList getTriggerTemplate();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList">DataGoogleCloudbuildTriggerTriggerTemplateList</a>

---

##### `webhookConfig`<sup>Required</sup> <a name="webhookConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.webhookConfig"></a>

```java
public DataGoogleCloudbuildTriggerWebhookConfigList getWebhookConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList">DataGoogleCloudbuildTriggerWebhookConfigList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `triggerIdInput`<sup>Optional</sup> <a name="triggerIdInput" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerIdInput"></a>

```java
public java.lang.String getTriggerIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerId"></a>

```java
public java.lang.String getTriggerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudbuildTriggerApprovalConfig <a name="DataGoogleCloudbuildTriggerApprovalConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerApprovalConfig;

DataGoogleCloudbuildTriggerApprovalConfig.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig;

DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest;

DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush;

DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuild <a name="DataGoogleCloudbuildTriggerBuild" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuild;

DataGoogleCloudbuildTriggerBuild.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildArtifacts <a name="DataGoogleCloudbuildTriggerBuildArtifacts" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifacts;

DataGoogleCloudbuildTriggerBuildArtifacts.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts <a name="DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts;

DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages <a name="DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages;

DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildArtifactsObjects <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjects" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects;

DataGoogleCloudbuildTriggerBuildArtifactsObjects.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming;

DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages <a name="DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages;

DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildAvailableSecrets <a name="DataGoogleCloudbuildTriggerBuildAvailableSecrets" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets;

DataGoogleCloudbuildTriggerBuildAvailableSecrets.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager;

DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildOptions <a name="DataGoogleCloudbuildTriggerBuildOptions" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildOptions;

DataGoogleCloudbuildTriggerBuildOptions.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildOptionsVolumes <a name="DataGoogleCloudbuildTriggerBuildOptionsVolumes" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes;

DataGoogleCloudbuildTriggerBuildOptionsVolumes.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildSecret <a name="DataGoogleCloudbuildTriggerBuildSecret" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSecret;

DataGoogleCloudbuildTriggerBuildSecret.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildSource <a name="DataGoogleCloudbuildTriggerBuildSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSource;

DataGoogleCloudbuildTriggerBuildSource.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildSourceRepoSource <a name="DataGoogleCloudbuildTriggerBuildSourceRepoSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource;

DataGoogleCloudbuildTriggerBuildSourceRepoSource.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildSourceStorageSource <a name="DataGoogleCloudbuildTriggerBuildSourceStorageSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource;

DataGoogleCloudbuildTriggerBuildSourceStorageSource.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildStep <a name="DataGoogleCloudbuildTriggerBuildStep" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildStep;

DataGoogleCloudbuildTriggerBuildStep.builder()
    .build();
```


### DataGoogleCloudbuildTriggerBuildStepVolumes <a name="DataGoogleCloudbuildTriggerBuildStepVolumes" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildStepVolumes;

DataGoogleCloudbuildTriggerBuildStepVolumes.builder()
    .build();
```


### DataGoogleCloudbuildTriggerConfig <a name="DataGoogleCloudbuildTriggerConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerConfig;

DataGoogleCloudbuildTriggerConfig.builder()
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
    .triggerId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.location">location</a></code> | <code>java.lang.String</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.triggerId">triggerId</a></code> | <code>java.lang.String</code> | The unique identifier for the trigger. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#id DataGoogleCloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#project DataGoogleCloudbuildTrigger#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#location DataGoogleCloudbuildTrigger#location}

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.triggerId"></a>

```java
public java.lang.String getTriggerId();
```

- *Type:* java.lang.String

The unique identifier for the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#trigger_id DataGoogleCloudbuildTrigger#trigger_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#id DataGoogleCloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/cloudbuild_trigger#project DataGoogleCloudbuildTrigger#project}.

---

### DataGoogleCloudbuildTriggerGitFileSource <a name="DataGoogleCloudbuildTriggerGitFileSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGitFileSource;

DataGoogleCloudbuildTriggerGitFileSource.builder()
    .build();
```


### DataGoogleCloudbuildTriggerGithub <a name="DataGoogleCloudbuildTriggerGithub" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGithub;

DataGoogleCloudbuildTriggerGithub.builder()
    .build();
```


### DataGoogleCloudbuildTriggerGithubPullRequest <a name="DataGoogleCloudbuildTriggerGithubPullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGithubPullRequest;

DataGoogleCloudbuildTriggerGithubPullRequest.builder()
    .build();
```


### DataGoogleCloudbuildTriggerGithubPush <a name="DataGoogleCloudbuildTriggerGithubPush" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGithubPush;

DataGoogleCloudbuildTriggerGithubPush.builder()
    .build();
```


### DataGoogleCloudbuildTriggerPubsubConfig <a name="DataGoogleCloudbuildTriggerPubsubConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerPubsubConfig;

DataGoogleCloudbuildTriggerPubsubConfig.builder()
    .build();
```


### DataGoogleCloudbuildTriggerRepositoryEventConfig <a name="DataGoogleCloudbuildTriggerRepositoryEventConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerRepositoryEventConfig;

DataGoogleCloudbuildTriggerRepositoryEventConfig.builder()
    .build();
```


### DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest;

DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest.builder()
    .build();
```


### DataGoogleCloudbuildTriggerRepositoryEventConfigPush <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPush" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush;

DataGoogleCloudbuildTriggerRepositoryEventConfigPush.builder()
    .build();
```


### DataGoogleCloudbuildTriggerSourceToBuild <a name="DataGoogleCloudbuildTriggerSourceToBuild" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerSourceToBuild;

DataGoogleCloudbuildTriggerSourceToBuild.builder()
    .build();
```


### DataGoogleCloudbuildTriggerTriggerTemplate <a name="DataGoogleCloudbuildTriggerTriggerTemplate" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerTriggerTemplate;

DataGoogleCloudbuildTriggerTriggerTemplate.builder()
    .build();
```


### DataGoogleCloudbuildTriggerWebhookConfig <a name="DataGoogleCloudbuildTriggerWebhookConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerWebhookConfig;

DataGoogleCloudbuildTriggerWebhookConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudbuildTriggerApprovalConfigList <a name="DataGoogleCloudbuildTriggerApprovalConfigList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerApprovalConfigList;

new DataGoogleCloudbuildTriggerApprovalConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.get"></a>

```java
public DataGoogleCloudbuildTriggerApprovalConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerApprovalConfigOutputReference <a name="DataGoogleCloudbuildTriggerApprovalConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference;

new DataGoogleCloudbuildTriggerApprovalConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired">approvalRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig">DataGoogleCloudbuildTriggerApprovalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvalRequired`<sup>Required</sup> <a name="approvalRequired" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired"></a>

```java
public IResolvable getApprovalRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerApprovalConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig">DataGoogleCloudbuildTriggerApprovalConfig</a>

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.get"></a>

```java
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource">bitbucketServerConfigResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug">repoSlug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bitbucketServerConfigResource`<sup>Required</sup> <a name="bitbucketServerConfigResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource"></a>

```java
public java.lang.String getBitbucketServerConfigResource();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest"></a>

```java
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push"></a>

```java
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList getPush();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList</a>

---

##### `repoSlug`<sup>Required</sup> <a name="repoSlug" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug"></a>

```java
public java.lang.String getRepoSlug();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig</a>

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.get"></a>

```java
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl">commentControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex">invertRegex</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commentControl`<sup>Required</sup> <a name="commentControl" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl"></a>

```java
public java.lang.String getCommentControl();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex"></a>

```java
public IResolvable getInvertRegex();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.get"></a>

```java
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference;

new DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex">invertRegex</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex"></a>

```java
public IResolvable getInvertRegex();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsList <a name="DataGoogleCloudbuildTriggerBuildArtifactsList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsList;

new DataGoogleCloudbuildTriggerBuildArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList <a name="DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList;

new DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference;

new DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList <a name="DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList;

new DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference;

new DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath">packagePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `packagePath`<sup>Required</sup> <a name="packagePath" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath"></a>

```java
public java.lang.String getPackagePath();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsList <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList;

new DataGoogleCloudbuildTriggerBuildArtifactsObjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference;

new DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing">timing</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects">DataGoogleCloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timing`<sup>Required</sup> <a name="timing" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList getTiming();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsObjects getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects">DataGoogleCloudbuildTriggerBuildArtifactsObjects</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList;

new DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference;

new DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference;

new DataGoogleCloudbuildTriggerBuildArtifactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.images">images</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts">mavenArtifacts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages">npmPackages</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.objects">objects</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages">pythonPackages</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts">DataGoogleCloudbuildTriggerBuildArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.images"></a>

```java
public java.util.List<java.lang.String> getImages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mavenArtifacts`<sup>Required</sup> <a name="mavenArtifacts" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList getMavenArtifacts();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList</a>

---

##### `npmPackages`<sup>Required</sup> <a name="npmPackages" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList getNpmPackages();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList</a>

---

##### `objects`<sup>Required</sup> <a name="objects" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.objects"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsObjectsList getObjects();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsList</a>

---

##### `pythonPackages`<sup>Required</sup> <a name="pythonPackages" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList getPythonPackages();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifacts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts">DataGoogleCloudbuildTriggerBuildArtifacts</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList <a name="DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList;

new DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference;

new DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages</a>

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsList <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList;

new DataGoogleCloudbuildTriggerBuildAvailableSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference;

new DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager">secretManager</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets">DataGoogleCloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretManager`<sup>Required</sup> <a name="secretManager" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager"></a>

```java
public DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList getSecretManager();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildAvailableSecrets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets">DataGoogleCloudbuildTriggerBuildAvailableSecrets</a>

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList;

new DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference;

new DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env">env</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env"></a>

```java
public java.lang.String getEnv();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager</a>

---


### DataGoogleCloudbuildTriggerBuildList <a name="DataGoogleCloudbuildTriggerBuildList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildList;

new DataGoogleCloudbuildTriggerBuildList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildOptionsList <a name="DataGoogleCloudbuildTriggerBuildOptionsList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildOptionsList;

new DataGoogleCloudbuildTriggerBuildOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildOptionsOutputReference <a name="DataGoogleCloudbuildTriggerBuildOptionsOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference;

new DataGoogleCloudbuildTriggerBuildOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions">dynamicSubstitutions</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.env">env</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logging">logging</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption">logStreamingOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption">requestedVerifyOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.secretEnv">secretEnv</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash">sourceProvenanceHash</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption">substitutionOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList">DataGoogleCloudbuildTriggerBuildOptionsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions">DataGoogleCloudbuildTriggerBuildOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `dynamicSubstitutions`<sup>Required</sup> <a name="dynamicSubstitutions" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions"></a>

```java
public IResolvable getDynamicSubstitutions();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.env"></a>

```java
public java.util.List<java.lang.String> getEnv();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logging"></a>

```java
public java.lang.String getLogging();
```

- *Type:* java.lang.String

---

##### `logStreamingOption`<sup>Required</sup> <a name="logStreamingOption" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption"></a>

```java
public java.lang.String getLogStreamingOption();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `requestedVerifyOption`<sup>Required</sup> <a name="requestedVerifyOption" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption"></a>

```java
public java.lang.String getRequestedVerifyOption();
```

- *Type:* java.lang.String

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.secretEnv"></a>

```java
public java.util.List<java.lang.String> getSecretEnv();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceProvenanceHash`<sup>Required</sup> <a name="sourceProvenanceHash" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash"></a>

```java
public java.util.List<java.lang.String> getSourceProvenanceHash();
```

- *Type:* java.util.List<java.lang.String>

---

##### `substitutionOption`<sup>Required</sup> <a name="substitutionOption" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption"></a>

```java
public java.lang.String getSubstitutionOption();
```

- *Type:* java.lang.String

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.volumes"></a>

```java
public DataGoogleCloudbuildTriggerBuildOptionsVolumesList getVolumes();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList">DataGoogleCloudbuildTriggerBuildOptionsVolumesList</a>

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions">DataGoogleCloudbuildTriggerBuildOptions</a>

---


### DataGoogleCloudbuildTriggerBuildOptionsVolumesList <a name="DataGoogleCloudbuildTriggerBuildOptionsVolumesList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList;

new DataGoogleCloudbuildTriggerBuildOptionsVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference <a name="DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference;

new DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes">DataGoogleCloudbuildTriggerBuildOptionsVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildOptionsVolumes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes">DataGoogleCloudbuildTriggerBuildOptionsVolumes</a>

---


### DataGoogleCloudbuildTriggerBuildOutputReference <a name="DataGoogleCloudbuildTriggerBuildOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildOutputReference;

new DataGoogleCloudbuildTriggerBuildOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.availableSecrets">availableSecrets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList">DataGoogleCloudbuildTriggerBuildAvailableSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.images">images</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.logsBucket">logsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList">DataGoogleCloudbuildTriggerBuildOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.queueTtl">queueTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList">DataGoogleCloudbuildTriggerBuildSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList">DataGoogleCloudbuildTriggerBuildSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.step">step</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList">DataGoogleCloudbuildTriggerBuildStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.substitutions">substitutions</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild">DataGoogleCloudbuildTriggerBuild</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.artifacts"></a>

```java
public DataGoogleCloudbuildTriggerBuildArtifactsList getArtifacts();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsList</a>

---

##### `availableSecrets`<sup>Required</sup> <a name="availableSecrets" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.availableSecrets"></a>

```java
public DataGoogleCloudbuildTriggerBuildAvailableSecretsList getAvailableSecrets();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList">DataGoogleCloudbuildTriggerBuildAvailableSecretsList</a>

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.images"></a>

```java
public java.util.List<java.lang.String> getImages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logsBucket`<sup>Required</sup> <a name="logsBucket" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.logsBucket"></a>

```java
public java.lang.String getLogsBucket();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.options"></a>

```java
public DataGoogleCloudbuildTriggerBuildOptionsList getOptions();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList">DataGoogleCloudbuildTriggerBuildOptionsList</a>

---

##### `queueTtl`<sup>Required</sup> <a name="queueTtl" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.queueTtl"></a>

```java
public java.lang.String getQueueTtl();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.secret"></a>

```java
public DataGoogleCloudbuildTriggerBuildSecretList getSecret();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList">DataGoogleCloudbuildTriggerBuildSecretList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.source"></a>

```java
public DataGoogleCloudbuildTriggerBuildSourceList getSource();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList">DataGoogleCloudbuildTriggerBuildSourceList</a>

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.step"></a>

```java
public DataGoogleCloudbuildTriggerBuildStepList getStep();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList">DataGoogleCloudbuildTriggerBuildStepList</a>

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.substitutions"></a>

```java
public StringMap getSubstitutions();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuild getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild">DataGoogleCloudbuildTriggerBuild</a>

---


### DataGoogleCloudbuildTriggerBuildSecretList <a name="DataGoogleCloudbuildTriggerBuildSecretList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSecretList;

new DataGoogleCloudbuildTriggerBuildSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildSecretOutputReference <a name="DataGoogleCloudbuildTriggerBuildSecretOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference;

new DataGoogleCloudbuildTriggerBuildSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.secretEnv">secretEnv</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret">DataGoogleCloudbuildTriggerBuildSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.secretEnv"></a>

```java
public StringMap getSecretEnv();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildSecret getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret">DataGoogleCloudbuildTriggerBuildSecret</a>

---


### DataGoogleCloudbuildTriggerBuildSourceList <a name="DataGoogleCloudbuildTriggerBuildSourceList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSourceList;

new DataGoogleCloudbuildTriggerBuildSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildSourceOutputReference <a name="DataGoogleCloudbuildTriggerBuildSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference;

new DataGoogleCloudbuildTriggerBuildSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.repoSource">repoSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList">DataGoogleCloudbuildTriggerBuildSourceRepoSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.storageSource">storageSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList">DataGoogleCloudbuildTriggerBuildSourceStorageSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource">DataGoogleCloudbuildTriggerBuildSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repoSource`<sup>Required</sup> <a name="repoSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.repoSource"></a>

```java
public DataGoogleCloudbuildTriggerBuildSourceRepoSourceList getRepoSource();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList">DataGoogleCloudbuildTriggerBuildSourceRepoSourceList</a>

---

##### `storageSource`<sup>Required</sup> <a name="storageSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.storageSource"></a>

```java
public DataGoogleCloudbuildTriggerBuildSourceStorageSourceList getStorageSource();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList">DataGoogleCloudbuildTriggerBuildSourceStorageSourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource">DataGoogleCloudbuildTriggerBuildSource</a>

---


### DataGoogleCloudbuildTriggerBuildSourceRepoSourceList <a name="DataGoogleCloudbuildTriggerBuildSourceRepoSourceList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList;

new DataGoogleCloudbuildTriggerBuildSourceRepoSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference <a name="DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference;

new DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex">invertRegex</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName">repoName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions">substitutions</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName">tagName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource">DataGoogleCloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex"></a>

```java
public IResolvable getInvertRegex();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions"></a>

```java
public StringMap getSubstitutions();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildSourceRepoSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource">DataGoogleCloudbuildTriggerBuildSourceRepoSource</a>

---


### DataGoogleCloudbuildTriggerBuildSourceStorageSourceList <a name="DataGoogleCloudbuildTriggerBuildSourceStorageSourceList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList;

new DataGoogleCloudbuildTriggerBuildSourceStorageSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference <a name="DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference;

new DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource">DataGoogleCloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildSourceStorageSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource">DataGoogleCloudbuildTriggerBuildSourceStorageSource</a>

---


### DataGoogleCloudbuildTriggerBuildStepList <a name="DataGoogleCloudbuildTriggerBuildStepList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildStepList;

new DataGoogleCloudbuildTriggerBuildStepList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildStepOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildStepOutputReference <a name="DataGoogleCloudbuildTriggerBuildStepOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildStepOutputReference;

new DataGoogleCloudbuildTriggerBuildStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowExitCodes">allowExitCodes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowFailure">allowFailure</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.entrypoint">entrypoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.env">env</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.script">script</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.secretEnv">secretEnv</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timing">timing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList">DataGoogleCloudbuildTriggerBuildStepVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.waitFor">waitFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep">DataGoogleCloudbuildTriggerBuildStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowExitCodes`<sup>Required</sup> <a name="allowExitCodes" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowExitCodes"></a>

```java
public java.util.List<java.lang.Number> getAllowExitCodes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `allowFailure`<sup>Required</sup> <a name="allowFailure" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowFailure"></a>

```java
public IResolvable getAllowFailure();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.entrypoint"></a>

```java
public java.lang.String getEntrypoint();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.env"></a>

```java
public java.util.List<java.lang.String> getEnv();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.script"></a>

```java
public java.lang.String getScript();
```

- *Type:* java.lang.String

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.secretEnv"></a>

```java
public java.util.List<java.lang.String> getSecretEnv();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `timing`<sup>Required</sup> <a name="timing" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timing"></a>

```java
public java.lang.String getTiming();
```

- *Type:* java.lang.String

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.volumes"></a>

```java
public DataGoogleCloudbuildTriggerBuildStepVolumesList getVolumes();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList">DataGoogleCloudbuildTriggerBuildStepVolumesList</a>

---

##### `waitFor`<sup>Required</sup> <a name="waitFor" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.waitFor"></a>

```java
public java.util.List<java.lang.String> getWaitFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildStep getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep">DataGoogleCloudbuildTriggerBuildStep</a>

---


### DataGoogleCloudbuildTriggerBuildStepVolumesList <a name="DataGoogleCloudbuildTriggerBuildStepVolumesList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildStepVolumesList;

new DataGoogleCloudbuildTriggerBuildStepVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.get"></a>

```java
public DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference <a name="DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference;

new DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes">DataGoogleCloudbuildTriggerBuildStepVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerBuildStepVolumes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes">DataGoogleCloudbuildTriggerBuildStepVolumes</a>

---


### DataGoogleCloudbuildTriggerGitFileSourceList <a name="DataGoogleCloudbuildTriggerGitFileSourceList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGitFileSourceList;

new DataGoogleCloudbuildTriggerGitFileSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.get"></a>

```java
public DataGoogleCloudbuildTriggerGitFileSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerGitFileSourceOutputReference <a name="DataGoogleCloudbuildTriggerGitFileSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference;

new DataGoogleCloudbuildTriggerGitFileSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig">bitbucketServerConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repoType">repoType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource">DataGoogleCloudbuildTriggerGitFileSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bitbucketServerConfig`<sup>Required</sup> <a name="bitbucketServerConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig"></a>

```java
public java.lang.String getBitbucketServerConfig();
```

- *Type:* java.lang.String

---

##### `githubEnterpriseConfig`<sup>Required</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig"></a>

```java
public java.lang.String getGithubEnterpriseConfig();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `repoType`<sup>Required</sup> <a name="repoType" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repoType"></a>

```java
public java.lang.String getRepoType();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerGitFileSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource">DataGoogleCloudbuildTriggerGitFileSource</a>

---


### DataGoogleCloudbuildTriggerGithubList <a name="DataGoogleCloudbuildTriggerGithubList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGithubList;

new DataGoogleCloudbuildTriggerGithubList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.get"></a>

```java
public DataGoogleCloudbuildTriggerGithubOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerGithubOutputReference <a name="DataGoogleCloudbuildTriggerGithubOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGithubOutputReference;

new DataGoogleCloudbuildTriggerGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName">enterpriseConfigResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList">DataGoogleCloudbuildTriggerGithubPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList">DataGoogleCloudbuildTriggerGithubPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub">DataGoogleCloudbuildTriggerGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enterpriseConfigResourceName`<sup>Required</sup> <a name="enterpriseConfigResourceName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName"></a>

```java
public java.lang.String getEnterpriseConfigResourceName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.pullRequest"></a>

```java
public DataGoogleCloudbuildTriggerGithubPullRequestList getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList">DataGoogleCloudbuildTriggerGithubPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.push"></a>

```java
public DataGoogleCloudbuildTriggerGithubPushList getPush();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList">DataGoogleCloudbuildTriggerGithubPushList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerGithub getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub">DataGoogleCloudbuildTriggerGithub</a>

---


### DataGoogleCloudbuildTriggerGithubPullRequestList <a name="DataGoogleCloudbuildTriggerGithubPullRequestList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGithubPullRequestList;

new DataGoogleCloudbuildTriggerGithubPullRequestList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.get"></a>

```java
public DataGoogleCloudbuildTriggerGithubPullRequestOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerGithubPullRequestOutputReference <a name="DataGoogleCloudbuildTriggerGithubPullRequestOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference;

new DataGoogleCloudbuildTriggerGithubPullRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.commentControl">commentControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex">invertRegex</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest">DataGoogleCloudbuildTriggerGithubPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commentControl`<sup>Required</sup> <a name="commentControl" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.commentControl"></a>

```java
public java.lang.String getCommentControl();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex"></a>

```java
public IResolvable getInvertRegex();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerGithubPullRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest">DataGoogleCloudbuildTriggerGithubPullRequest</a>

---


### DataGoogleCloudbuildTriggerGithubPushList <a name="DataGoogleCloudbuildTriggerGithubPushList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGithubPushList;

new DataGoogleCloudbuildTriggerGithubPushList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.get"></a>

```java
public DataGoogleCloudbuildTriggerGithubPushOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerGithubPushOutputReference <a name="DataGoogleCloudbuildTriggerGithubPushOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerGithubPushOutputReference;

new DataGoogleCloudbuildTriggerGithubPushOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.invertRegex">invertRegex</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush">DataGoogleCloudbuildTriggerGithubPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.invertRegex"></a>

```java
public IResolvable getInvertRegex();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerGithubPush getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush">DataGoogleCloudbuildTriggerGithubPush</a>

---


### DataGoogleCloudbuildTriggerPubsubConfigList <a name="DataGoogleCloudbuildTriggerPubsubConfigList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerPubsubConfigList;

new DataGoogleCloudbuildTriggerPubsubConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.get"></a>

```java
public DataGoogleCloudbuildTriggerPubsubConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerPubsubConfigOutputReference <a name="DataGoogleCloudbuildTriggerPubsubConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference;

new DataGoogleCloudbuildTriggerPubsubConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.subscription">subscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig">DataGoogleCloudbuildTriggerPubsubConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.subscription"></a>

```java
public java.lang.String getSubscription();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerPubsubConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig">DataGoogleCloudbuildTriggerPubsubConfig</a>

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigList <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList;

new DataGoogleCloudbuildTriggerRepositoryEventConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.get"></a>

```java
public DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference;

new DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList">DataGoogleCloudbuildTriggerRepositoryEventConfigPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig">DataGoogleCloudbuildTriggerRepositoryEventConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest"></a>

```java
public DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList getPullRequest();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.push"></a>

```java
public DataGoogleCloudbuildTriggerRepositoryEventConfigPushList getPush();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList">DataGoogleCloudbuildTriggerRepositoryEventConfigPushList</a>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerRepositoryEventConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig">DataGoogleCloudbuildTriggerRepositoryEventConfig</a>

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList;

new DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.get"></a>

```java
public DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference;

new DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl">commentControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex">invertRegex</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commentControl`<sup>Required</sup> <a name="commentControl" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl"></a>

```java
public java.lang.String getCommentControl();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex"></a>

```java
public IResolvable getInvertRegex();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a>

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPushList <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPushList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList;

new DataGoogleCloudbuildTriggerRepositoryEventConfigPushList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.get"></a>

```java
public DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference;

new DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex">invertRegex</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush">DataGoogleCloudbuildTriggerRepositoryEventConfigPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex"></a>

```java
public IResolvable getInvertRegex();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerRepositoryEventConfigPush getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush">DataGoogleCloudbuildTriggerRepositoryEventConfigPush</a>

---


### DataGoogleCloudbuildTriggerSourceToBuildList <a name="DataGoogleCloudbuildTriggerSourceToBuildList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerSourceToBuildList;

new DataGoogleCloudbuildTriggerSourceToBuildList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.get"></a>

```java
public DataGoogleCloudbuildTriggerSourceToBuildOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerSourceToBuildOutputReference <a name="DataGoogleCloudbuildTriggerSourceToBuildOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference;

new DataGoogleCloudbuildTriggerSourceToBuildOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig">bitbucketServerConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repoType">repoType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild">DataGoogleCloudbuildTriggerSourceToBuild</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bitbucketServerConfig`<sup>Required</sup> <a name="bitbucketServerConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig"></a>

```java
public java.lang.String getBitbucketServerConfig();
```

- *Type:* java.lang.String

---

##### `githubEnterpriseConfig`<sup>Required</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig"></a>

```java
public java.lang.String getGithubEnterpriseConfig();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `repoType`<sup>Required</sup> <a name="repoType" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repoType"></a>

```java
public java.lang.String getRepoType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerSourceToBuild getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild">DataGoogleCloudbuildTriggerSourceToBuild</a>

---


### DataGoogleCloudbuildTriggerTriggerTemplateList <a name="DataGoogleCloudbuildTriggerTriggerTemplateList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerTriggerTemplateList;

new DataGoogleCloudbuildTriggerTriggerTemplateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.get"></a>

```java
public DataGoogleCloudbuildTriggerTriggerTemplateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerTriggerTemplateOutputReference <a name="DataGoogleCloudbuildTriggerTriggerTemplateOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference;

new DataGoogleCloudbuildTriggerTriggerTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex">invertRegex</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.repoName">repoName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.tagName">tagName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate">DataGoogleCloudbuildTriggerTriggerTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex"></a>

```java
public IResolvable getInvertRegex();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerTriggerTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate">DataGoogleCloudbuildTriggerTriggerTemplate</a>

---


### DataGoogleCloudbuildTriggerWebhookConfigList <a name="DataGoogleCloudbuildTriggerWebhookConfigList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerWebhookConfigList;

new DataGoogleCloudbuildTriggerWebhookConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.get"></a>

```java
public DataGoogleCloudbuildTriggerWebhookConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudbuildTriggerWebhookConfigOutputReference <a name="DataGoogleCloudbuildTriggerWebhookConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloudbuild_trigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference;

new DataGoogleCloudbuildTriggerWebhookConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig">DataGoogleCloudbuildTriggerWebhookConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudbuildTriggerWebhookConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig">DataGoogleCloudbuildTriggerWebhookConfig</a>

---



