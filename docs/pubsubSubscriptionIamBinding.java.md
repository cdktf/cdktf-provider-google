# `pubsubSubscriptionIamBinding` Submodule <a name="`pubsubSubscriptionIamBinding` Submodule" id="@cdktf/provider-google.pubsubSubscriptionIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubSubscriptionIamBinding <a name="PubsubSubscriptionIamBinding" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding google_pubsub_subscription_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_subscription_iam_binding.PubsubSubscriptionIamBinding;

PubsubSubscriptionIamBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
    .subscription(java.lang.String)
//  .condition(PubsubSubscriptionIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#members PubsubSubscriptionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#role PubsubSubscriptionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.subscription">subscription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#subscription PubsubSubscriptionIamBinding#subscription}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition">PubsubSubscriptionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#id PubsubSubscriptionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#project PubsubSubscriptionIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#members PubsubSubscriptionIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#role PubsubSubscriptionIamBinding#role}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.subscription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#subscription PubsubSubscriptionIamBinding#subscription}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition">PubsubSubscriptionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#condition PubsubSubscriptionIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#id PubsubSubscriptionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#project PubsubSubscriptionIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.putCondition"></a>

```java
public void putCondition(PubsubSubscriptionIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition">PubsubSubscriptionIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_subscription_iam_binding.PubsubSubscriptionIamBinding;

PubsubSubscriptionIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_subscription_iam_binding.PubsubSubscriptionIamBinding;

PubsubSubscriptionIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_subscription_iam_binding.PubsubSubscriptionIamBinding;

PubsubSubscriptionIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference">PubsubSubscriptionIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition">PubsubSubscriptionIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.subscriptionInput">subscriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.subscription">subscription</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.condition"></a>

```java
public PubsubSubscriptionIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference">PubsubSubscriptionIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.conditionInput"></a>

```java
public PubsubSubscriptionIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition">PubsubSubscriptionIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `subscriptionInput`<sup>Optional</sup> <a name="subscriptionInput" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.subscriptionInput"></a>

```java
public java.lang.String getSubscriptionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.subscription"></a>

```java
public java.lang.String getSubscription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubSubscriptionIamBindingCondition <a name="PubsubSubscriptionIamBindingCondition" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_subscription_iam_binding.PubsubSubscriptionIamBindingCondition;

PubsubSubscriptionIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#expression PubsubSubscriptionIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#title PubsubSubscriptionIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#description PubsubSubscriptionIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#expression PubsubSubscriptionIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#title PubsubSubscriptionIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#description PubsubSubscriptionIamBinding#description}.

---

### PubsubSubscriptionIamBindingConfig <a name="PubsubSubscriptionIamBindingConfig" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_subscription_iam_binding.PubsubSubscriptionIamBindingConfig;

PubsubSubscriptionIamBindingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
    .subscription(java.lang.String)
//  .condition(PubsubSubscriptionIamBindingCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#members PubsubSubscriptionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#role PubsubSubscriptionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.subscription">subscription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#subscription PubsubSubscriptionIamBinding#subscription}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition">PubsubSubscriptionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#id PubsubSubscriptionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#project PubsubSubscriptionIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#members PubsubSubscriptionIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#role PubsubSubscriptionIamBinding#role}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.subscription"></a>

```java
public java.lang.String getSubscription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#subscription PubsubSubscriptionIamBinding#subscription}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.condition"></a>

```java
public PubsubSubscriptionIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition">PubsubSubscriptionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#condition PubsubSubscriptionIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#id PubsubSubscriptionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription_iam_binding#project PubsubSubscriptionIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubSubscriptionIamBindingConditionOutputReference <a name="PubsubSubscriptionIamBindingConditionOutputReference" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_subscription_iam_binding.PubsubSubscriptionIamBindingConditionOutputReference;

new PubsubSubscriptionIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition">PubsubSubscriptionIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingConditionOutputReference.property.internalValue"></a>

```java
public PubsubSubscriptionIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamBinding.PubsubSubscriptionIamBindingCondition">PubsubSubscriptionIamBindingCondition</a>

---



