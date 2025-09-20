# `dataGoogleGkeHubMembership` Submodule <a name="`dataGoogleGkeHubMembership` Submodule" id="@cdktf/provider-google.dataGoogleGkeHubMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleGkeHubMembership <a name="DataGoogleGkeHubMembership" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership google_gke_hub_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembership;

DataGoogleGkeHubMembership.Builder.create(Construct scope, java.lang.String id)
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
    .membershipId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the membership. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.membershipId">membershipId</a></code> | <code>java.lang.String</code> | The client-provided identifier of the membership. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#id DataGoogleGkeHubMembership#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#project DataGoogleGkeHubMembership#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the membership. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#location DataGoogleGkeHubMembership#location}

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.membershipId"></a>

- *Type:* java.lang.String

The client-provided identifier of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#membership_id DataGoogleGkeHubMembership#membership_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#id DataGoogleGkeHubMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#project DataGoogleGkeHubMembership#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleGkeHubMembership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembership;

DataGoogleGkeHubMembership.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembership;

DataGoogleGkeHubMembership.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembership;

DataGoogleGkeHubMembership.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembership;

DataGoogleGkeHubMembership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleGkeHubMembership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleGkeHubMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleGkeHubMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleGkeHubMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleGkeHubMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.authority">authority</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList">DataGoogleGkeHubMembershipAuthorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList">DataGoogleGkeHubMembershipEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.membershipIdInput">membershipIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.membershipId">membershipId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.authority"></a>

```java
public DataGoogleGkeHubMembershipAuthorityList getAuthority();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList">DataGoogleGkeHubMembershipAuthorityList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.endpoint"></a>

```java
public DataGoogleGkeHubMembershipEndpointList getEndpoint();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList">DataGoogleGkeHubMembershipEndpointList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membershipIdInput`<sup>Optional</sup> <a name="membershipIdInput" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.membershipIdInput"></a>

```java
public java.lang.String getMembershipIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.membershipId"></a>

```java
public java.lang.String getMembershipId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleGkeHubMembershipAuthority <a name="DataGoogleGkeHubMembershipAuthority" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthority.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembershipAuthority;

DataGoogleGkeHubMembershipAuthority.builder()
    .build();
```


### DataGoogleGkeHubMembershipConfig <a name="DataGoogleGkeHubMembershipConfig" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembershipConfig;

DataGoogleGkeHubMembershipConfig.builder()
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
    .membershipId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the membership. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.membershipId">membershipId</a></code> | <code>java.lang.String</code> | The client-provided identifier of the membership. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#id DataGoogleGkeHubMembership#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#project DataGoogleGkeHubMembership#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the membership. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#location DataGoogleGkeHubMembership#location}

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.membershipId"></a>

```java
public java.lang.String getMembershipId();
```

- *Type:* java.lang.String

The client-provided identifier of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#membership_id DataGoogleGkeHubMembership#membership_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#id DataGoogleGkeHubMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/gke_hub_membership#project DataGoogleGkeHubMembership#project}.

---

### DataGoogleGkeHubMembershipEndpoint <a name="DataGoogleGkeHubMembershipEndpoint" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembershipEndpoint;

DataGoogleGkeHubMembershipEndpoint.builder()
    .build();
```


### DataGoogleGkeHubMembershipEndpointGkeCluster <a name="DataGoogleGkeHubMembershipEndpointGkeCluster" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembershipEndpointGkeCluster;

DataGoogleGkeHubMembershipEndpointGkeCluster.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleGkeHubMembershipAuthorityList <a name="DataGoogleGkeHubMembershipAuthorityList" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembershipAuthorityList;

new DataGoogleGkeHubMembershipAuthorityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.get"></a>

```java
public DataGoogleGkeHubMembershipAuthorityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleGkeHubMembershipAuthorityOutputReference <a name="DataGoogleGkeHubMembershipAuthorityOutputReference" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembershipAuthorityOutputReference;

new DataGoogleGkeHubMembershipAuthorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthority">DataGoogleGkeHubMembershipAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.internalValue"></a>

```java
public DataGoogleGkeHubMembershipAuthority getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthority">DataGoogleGkeHubMembershipAuthority</a>

---


### DataGoogleGkeHubMembershipEndpointGkeClusterList <a name="DataGoogleGkeHubMembershipEndpointGkeClusterList" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembershipEndpointGkeClusterList;

new DataGoogleGkeHubMembershipEndpointGkeClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.get"></a>

```java
public DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference <a name="DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference;

new DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLink">resourceLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeCluster">DataGoogleGkeHubMembershipEndpointGkeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceLink`<sup>Required</sup> <a name="resourceLink" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLink"></a>

```java
public java.lang.String getResourceLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.internalValue"></a>

```java
public DataGoogleGkeHubMembershipEndpointGkeCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeCluster">DataGoogleGkeHubMembershipEndpointGkeCluster</a>

---


### DataGoogleGkeHubMembershipEndpointList <a name="DataGoogleGkeHubMembershipEndpointList" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembershipEndpointList;

new DataGoogleGkeHubMembershipEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.get"></a>

```java
public DataGoogleGkeHubMembershipEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleGkeHubMembershipEndpointOutputReference <a name="DataGoogleGkeHubMembershipEndpointOutputReference" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_gke_hub_membership.DataGoogleGkeHubMembershipEndpointOutputReference;

new DataGoogleGkeHubMembershipEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.gkeCluster">gkeCluster</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList">DataGoogleGkeHubMembershipEndpointGkeClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpoint">DataGoogleGkeHubMembershipEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gkeCluster`<sup>Required</sup> <a name="gkeCluster" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.gkeCluster"></a>

```java
public DataGoogleGkeHubMembershipEndpointGkeClusterList getGkeCluster();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList">DataGoogleGkeHubMembershipEndpointGkeClusterList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.internalValue"></a>

```java
public DataGoogleGkeHubMembershipEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpoint">DataGoogleGkeHubMembershipEndpoint</a>

---



