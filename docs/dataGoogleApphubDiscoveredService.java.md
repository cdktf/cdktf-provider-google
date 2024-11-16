# `dataGoogleApphubDiscoveredService` Submodule <a name="`dataGoogleApphubDiscoveredService` Submodule" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApphubDiscoveredService <a name="DataGoogleApphubDiscoveredService" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service google_apphub_discovered_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredService;

DataGoogleApphubDiscoveredService.Builder.create(Construct scope, java.lang.String id)
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
    .serviceUri(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#location DataGoogleApphubDiscoveredService#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.serviceUri">serviceUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#service_uri DataGoogleApphubDiscoveredService#service_uri}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#id DataGoogleApphubDiscoveredService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#project DataGoogleApphubDiscoveredService#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#location DataGoogleApphubDiscoveredService#location}.

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.serviceUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#service_uri DataGoogleApphubDiscoveredService#service_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#id DataGoogleApphubDiscoveredService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#project DataGoogleApphubDiscoveredService#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleApphubDiscoveredService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredService;

DataGoogleApphubDiscoveredService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredService;

DataGoogleApphubDiscoveredService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredService;

DataGoogleApphubDiscoveredService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredService;

DataGoogleApphubDiscoveredService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleApphubDiscoveredService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleApphubDiscoveredService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleApphubDiscoveredService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleApphubDiscoveredService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApphubDiscoveredService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceProperties">serviceProperties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList">DataGoogleApphubDiscoveredServiceServicePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceReference">serviceReference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList">DataGoogleApphubDiscoveredServiceServiceReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceUriInput">serviceUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceUri">serviceUri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceProperties`<sup>Required</sup> <a name="serviceProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceProperties"></a>

```java
public DataGoogleApphubDiscoveredServiceServicePropertiesList getServiceProperties();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList">DataGoogleApphubDiscoveredServiceServicePropertiesList</a>

---

##### `serviceReference`<sup>Required</sup> <a name="serviceReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceReference"></a>

```java
public DataGoogleApphubDiscoveredServiceServiceReferenceList getServiceReference();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList">DataGoogleApphubDiscoveredServiceServiceReferenceList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceUriInput`<sup>Optional</sup> <a name="serviceUriInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceUriInput"></a>

```java
public java.lang.String getServiceUriInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceUri"></a>

```java
public java.lang.String getServiceUri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApphubDiscoveredServiceConfig <a name="DataGoogleApphubDiscoveredServiceConfig" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredServiceConfig;

DataGoogleApphubDiscoveredServiceConfig.builder()
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
    .serviceUri(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#location DataGoogleApphubDiscoveredService#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.serviceUri">serviceUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#service_uri DataGoogleApphubDiscoveredService#service_uri}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#id DataGoogleApphubDiscoveredService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#project DataGoogleApphubDiscoveredService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#location DataGoogleApphubDiscoveredService#location}.

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.serviceUri"></a>

```java
public java.lang.String getServiceUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#service_uri DataGoogleApphubDiscoveredService#service_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#id DataGoogleApphubDiscoveredService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/data-sources/apphub_discovered_service#project DataGoogleApphubDiscoveredService#project}.

---

### DataGoogleApphubDiscoveredServiceServiceProperties <a name="DataGoogleApphubDiscoveredServiceServiceProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredServiceServiceProperties;

DataGoogleApphubDiscoveredServiceServiceProperties.builder()
    .build();
```


### DataGoogleApphubDiscoveredServiceServiceReference <a name="DataGoogleApphubDiscoveredServiceServiceReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredServiceServiceReference;

DataGoogleApphubDiscoveredServiceServiceReference.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleApphubDiscoveredServiceServicePropertiesList <a name="DataGoogleApphubDiscoveredServiceServicePropertiesList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredServiceServicePropertiesList;

new DataGoogleApphubDiscoveredServiceServicePropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.get"></a>

```java
public DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference <a name="DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference;

new DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.gcpProject">gcpProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceProperties">DataGoogleApphubDiscoveredServiceServiceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcpProject`<sup>Required</sup> <a name="gcpProject" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.gcpProject"></a>

```java
public java.lang.String getGcpProject();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.internalValue"></a>

```java
public DataGoogleApphubDiscoveredServiceServiceProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceProperties">DataGoogleApphubDiscoveredServiceServiceProperties</a>

---


### DataGoogleApphubDiscoveredServiceServiceReferenceList <a name="DataGoogleApphubDiscoveredServiceServiceReferenceList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredServiceServiceReferenceList;

new DataGoogleApphubDiscoveredServiceServiceReferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.get"></a>

```java
public DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference <a name="DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_apphub_discovered_service.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference;

new DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReference">DataGoogleApphubDiscoveredServiceServiceReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.internalValue"></a>

```java
public DataGoogleApphubDiscoveredServiceServiceReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReference">DataGoogleApphubDiscoveredServiceServiceReference</a>

---



