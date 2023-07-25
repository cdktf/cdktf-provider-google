# `data_google_pubsub_subscription`

Refer to the Terraform Registory for docs: [`data_google_pubsub_subscription`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription).

# `dataGooglePubsubSubscription` Submodule <a name="`dataGooglePubsubSubscription` Submodule" id="@cdktf/provider-google.dataGooglePubsubSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePubsubSubscription <a name="DataGooglePubsubSubscription" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription google_pubsub_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscription;

DataGooglePubsubSubscription.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#id DataGooglePubsubSubscription#id}. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#project DataGooglePubsubSubscription#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#name DataGooglePubsubSubscription#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#id DataGooglePubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#project DataGooglePubsubSubscription#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscription;

DataGooglePubsubSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscription;

DataGooglePubsubSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscription;

DataGooglePubsubSubscription.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.ackDeadlineSeconds">ackDeadlineSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.bigqueryConfig">bigqueryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList">DataGooglePubsubSubscriptionBigqueryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.deadLetterPolicy">deadLetterPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList">DataGooglePubsubSubscriptionDeadLetterPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableExactlyOnceDelivery">enableExactlyOnceDelivery</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableMessageOrdering">enableMessageOrdering</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.expirationPolicy">expirationPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList">DataGooglePubsubSubscriptionExpirationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.messageRetentionDuration">messageRetentionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.pushConfig">pushConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList">DataGooglePubsubSubscriptionPushConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retainAckedMessages">retainAckedMessages</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList">DataGooglePubsubSubscriptionRetryPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `ackDeadlineSeconds`<sup>Required</sup> <a name="ackDeadlineSeconds" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.ackDeadlineSeconds"></a>

```java
public java.lang.Number getAckDeadlineSeconds();
```

- *Type:* java.lang.Number

---

##### `bigqueryConfig`<sup>Required</sup> <a name="bigqueryConfig" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.bigqueryConfig"></a>

```java
public DataGooglePubsubSubscriptionBigqueryConfigList getBigqueryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList">DataGooglePubsubSubscriptionBigqueryConfigList</a>

---

##### `deadLetterPolicy`<sup>Required</sup> <a name="deadLetterPolicy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.deadLetterPolicy"></a>

```java
public DataGooglePubsubSubscriptionDeadLetterPolicyList getDeadLetterPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList">DataGooglePubsubSubscriptionDeadLetterPolicyList</a>

---

##### `enableExactlyOnceDelivery`<sup>Required</sup> <a name="enableExactlyOnceDelivery" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableExactlyOnceDelivery"></a>

```java
public IResolvable getEnableExactlyOnceDelivery();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableMessageOrdering`<sup>Required</sup> <a name="enableMessageOrdering" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.enableMessageOrdering"></a>

```java
public IResolvable getEnableMessageOrdering();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `expirationPolicy`<sup>Required</sup> <a name="expirationPolicy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.expirationPolicy"></a>

```java
public DataGooglePubsubSubscriptionExpirationPolicyList getExpirationPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList">DataGooglePubsubSubscriptionExpirationPolicyList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `messageRetentionDuration`<sup>Required</sup> <a name="messageRetentionDuration" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.messageRetentionDuration"></a>

```java
public java.lang.String getMessageRetentionDuration();
```

- *Type:* java.lang.String

---

##### `pushConfig`<sup>Required</sup> <a name="pushConfig" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.pushConfig"></a>

```java
public DataGooglePubsubSubscriptionPushConfigList getPushConfig();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList">DataGooglePubsubSubscriptionPushConfigList</a>

---

##### `retainAckedMessages`<sup>Required</sup> <a name="retainAckedMessages" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retainAckedMessages"></a>

```java
public IResolvable getRetainAckedMessages();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.retryPolicy"></a>

```java
public DataGooglePubsubSubscriptionRetryPolicyList getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList">DataGooglePubsubSubscriptionRetryPolicyList</a>

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePubsubSubscriptionBigqueryConfig <a name="DataGooglePubsubSubscriptionBigqueryConfig" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionBigqueryConfig;

DataGooglePubsubSubscriptionBigqueryConfig.builder()
    .build();
```


### DataGooglePubsubSubscriptionConfig <a name="DataGooglePubsubSubscriptionConfig" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionConfig;

DataGooglePubsubSubscriptionConfig.builder()
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
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#id DataGooglePubsubSubscription#id}. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#project DataGooglePubsubSubscription#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#name DataGooglePubsubSubscription#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#id DataGooglePubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/pubsub_subscription#project DataGooglePubsubSubscription#project}.

---

### DataGooglePubsubSubscriptionDeadLetterPolicy <a name="DataGooglePubsubSubscriptionDeadLetterPolicy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionDeadLetterPolicy;

DataGooglePubsubSubscriptionDeadLetterPolicy.builder()
    .build();
```


### DataGooglePubsubSubscriptionExpirationPolicy <a name="DataGooglePubsubSubscriptionExpirationPolicy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionExpirationPolicy;

DataGooglePubsubSubscriptionExpirationPolicy.builder()
    .build();
```


### DataGooglePubsubSubscriptionPushConfig <a name="DataGooglePubsubSubscriptionPushConfig" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionPushConfig;

DataGooglePubsubSubscriptionPushConfig.builder()
    .build();
```


### DataGooglePubsubSubscriptionPushConfigOidcToken <a name="DataGooglePubsubSubscriptionPushConfigOidcToken" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionPushConfigOidcToken;

DataGooglePubsubSubscriptionPushConfigOidcToken.builder()
    .build();
```


### DataGooglePubsubSubscriptionRetryPolicy <a name="DataGooglePubsubSubscriptionRetryPolicy" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionRetryPolicy;

DataGooglePubsubSubscriptionRetryPolicy.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGooglePubsubSubscriptionBigqueryConfigList <a name="DataGooglePubsubSubscriptionBigqueryConfigList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionBigqueryConfigList;

new DataGooglePubsubSubscriptionBigqueryConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.get"></a>

```java
public DataGooglePubsubSubscriptionBigqueryConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGooglePubsubSubscriptionBigqueryConfigOutputReference <a name="DataGooglePubsubSubscriptionBigqueryConfigOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference;

new DataGooglePubsubSubscriptionBigqueryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">dropUnknownFields</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">useTopicSchema</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">writeMetadata</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig">DataGooglePubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dropUnknownFields`<sup>Required</sup> <a name="dropUnknownFields" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```java
public IResolvable getDropUnknownFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

##### `useTopicSchema`<sup>Required</sup> <a name="useTopicSchema" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```java
public IResolvable getUseTopicSchema();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `writeMetadata`<sup>Required</sup> <a name="writeMetadata" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```java
public IResolvable getWriteMetadata();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```java
public DataGooglePubsubSubscriptionBigqueryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionBigqueryConfig">DataGooglePubsubSubscriptionBigqueryConfig</a>

---


### DataGooglePubsubSubscriptionDeadLetterPolicyList <a name="DataGooglePubsubSubscriptionDeadLetterPolicyList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionDeadLetterPolicyList;

new DataGooglePubsubSubscriptionDeadLetterPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.get"></a>

```java
public DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference <a name="DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference;

new DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">deadLetterTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">maxDeliveryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy">DataGooglePubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deadLetterTopic`<sup>Required</sup> <a name="deadLetterTopic" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```java
public java.lang.String getDeadLetterTopic();
```

- *Type:* java.lang.String

---

##### `maxDeliveryAttempts`<sup>Required</sup> <a name="maxDeliveryAttempts" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```java
public java.lang.Number getMaxDeliveryAttempts();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```java
public DataGooglePubsubSubscriptionDeadLetterPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionDeadLetterPolicy">DataGooglePubsubSubscriptionDeadLetterPolicy</a>

---


### DataGooglePubsubSubscriptionExpirationPolicyList <a name="DataGooglePubsubSubscriptionExpirationPolicyList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionExpirationPolicyList;

new DataGooglePubsubSubscriptionExpirationPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.get"></a>

```java
public DataGooglePubsubSubscriptionExpirationPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGooglePubsubSubscriptionExpirationPolicyOutputReference <a name="DataGooglePubsubSubscriptionExpirationPolicyOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference;

new DataGooglePubsubSubscriptionExpirationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy">DataGooglePubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```java
public DataGooglePubsubSubscriptionExpirationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionExpirationPolicy">DataGooglePubsubSubscriptionExpirationPolicy</a>

---


### DataGooglePubsubSubscriptionPushConfigList <a name="DataGooglePubsubSubscriptionPushConfigList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionPushConfigList;

new DataGooglePubsubSubscriptionPushConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.get"></a>

```java
public DataGooglePubsubSubscriptionPushConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGooglePubsubSubscriptionPushConfigOidcTokenList <a name="DataGooglePubsubSubscriptionPushConfigOidcTokenList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList;

new DataGooglePubsubSubscriptionPushConfigOidcTokenList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.get"></a>

```java
public DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference <a name="DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference;

new DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken">DataGooglePubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```java
public DataGooglePubsubSubscriptionPushConfigOidcToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcToken">DataGooglePubsubSubscriptionPushConfigOidcToken</a>

---


### DataGooglePubsubSubscriptionPushConfigOutputReference <a name="DataGooglePubsubSubscriptionPushConfigOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionPushConfigOutputReference;

new DataGooglePubsubSubscriptionPushConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.attributes">attributes</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList">DataGooglePubsubSubscriptionPushConfigOidcTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">pushEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig">DataGooglePubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```java
public StringMap getAttributes();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```java
public DataGooglePubsubSubscriptionPushConfigOidcTokenList getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOidcTokenList">DataGooglePubsubSubscriptionPushConfigOidcTokenList</a>

---

##### `pushEndpoint`<sup>Required</sup> <a name="pushEndpoint" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```java
public java.lang.String getPushEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```java
public DataGooglePubsubSubscriptionPushConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionPushConfig">DataGooglePubsubSubscriptionPushConfig</a>

---


### DataGooglePubsubSubscriptionRetryPolicyList <a name="DataGooglePubsubSubscriptionRetryPolicyList" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionRetryPolicyList;

new DataGooglePubsubSubscriptionRetryPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.get"></a>

```java
public DataGooglePubsubSubscriptionRetryPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGooglePubsubSubscriptionRetryPolicyOutputReference <a name="DataGooglePubsubSubscriptionRetryPolicyOutputReference" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_pubsub_subscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference;

new DataGooglePubsubSubscriptionRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">maximumBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">minimumBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy">DataGooglePubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBackoff`<sup>Required</sup> <a name="maximumBackoff" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```java
public java.lang.String getMaximumBackoff();
```

- *Type:* java.lang.String

---

##### `minimumBackoff`<sup>Required</sup> <a name="minimumBackoff" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```java
public java.lang.String getMinimumBackoff();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```java
public DataGooglePubsubSubscriptionRetryPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGooglePubsubSubscription.DataGooglePubsubSubscriptionRetryPolicy">DataGooglePubsubSubscriptionRetryPolicy</a>

---



