# `google_pubsub_lite_subscription`

Refer to the Terraform Registory for docs: [`google_pubsub_lite_subscription`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription).

# `pubsubLiteSubscription` Submodule <a name="`pubsubLiteSubscription` Submodule" id="@cdktf/provider-google.pubsubLiteSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubLiteSubscription <a name="PubsubLiteSubscription" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription google_pubsub_lite_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_subscription.PubsubLiteSubscription;

PubsubLiteSubscription.Builder.create(Construct scope, java.lang.String id)
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
    .topic(java.lang.String)
//  .deliveryConfig(PubsubLiteSubscriptionDeliveryConfig)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(PubsubLiteSubscriptionTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.topic">topic</a></code> | <code>java.lang.String</code> | A reference to a Topic resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.deliveryConfig">deliveryConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a></code> | delivery_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#id PubsubLiteSubscription#id}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#project PubsubLiteSubscription#project}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone of the pubsub lite topic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#name PubsubLiteSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.topic"></a>

- *Type:* java.lang.String

A reference to a Topic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#topic PubsubLiteSubscription#topic}

---

##### `deliveryConfig`<sup>Optional</sup> <a name="deliveryConfig" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.deliveryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a>

delivery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#delivery_config PubsubLiteSubscription#delivery_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#id PubsubLiteSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#project PubsubLiteSubscription#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#region PubsubLiteSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#timeouts PubsubLiteSubscription#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#zone PubsubLiteSubscription#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putDeliveryConfig">putDeliveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetDeliveryConfig">resetDeliveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDeliveryConfig` <a name="putDeliveryConfig" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putDeliveryConfig"></a>

```java
public void putDeliveryConfig(PubsubLiteSubscriptionDeliveryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putDeliveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putTimeouts"></a>

```java
public void putTimeouts(PubsubLiteSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a>

---

##### `resetDeliveryConfig` <a name="resetDeliveryConfig" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetDeliveryConfig"></a>

```java
public void resetDeliveryConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_subscription.PubsubLiteSubscription;

PubsubLiteSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_subscription.PubsubLiteSubscription;

PubsubLiteSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_subscription.PubsubLiteSubscription;

PubsubLiteSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deliveryConfig">deliveryConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference">PubsubLiteSubscriptionDeliveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference">PubsubLiteSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deliveryConfigInput">deliveryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deliveryConfig`<sup>Required</sup> <a name="deliveryConfig" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deliveryConfig"></a>

```java
public PubsubLiteSubscriptionDeliveryConfigOutputReference getDeliveryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference">PubsubLiteSubscriptionDeliveryConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.timeouts"></a>

```java
public PubsubLiteSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference">PubsubLiteSubscriptionTimeoutsOutputReference</a>

---

##### `deliveryConfigInput`<sup>Optional</sup> <a name="deliveryConfigInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.deliveryConfigInput"></a>

```java
public PubsubLiteSubscriptionDeliveryConfig getDeliveryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a>

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubLiteSubscriptionConfig <a name="PubsubLiteSubscriptionConfig" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_subscription.PubsubLiteSubscriptionConfig;

PubsubLiteSubscriptionConfig.builder()
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
    .topic(java.lang.String)
//  .deliveryConfig(PubsubLiteSubscriptionDeliveryConfig)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(PubsubLiteSubscriptionTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.topic">topic</a></code> | <code>java.lang.String</code> | A reference to a Topic resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.deliveryConfig">deliveryConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a></code> | delivery_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#id PubsubLiteSubscription#id}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#project PubsubLiteSubscription#project}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone of the pubsub lite topic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#name PubsubLiteSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

A reference to a Topic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#topic PubsubLiteSubscription#topic}

---

##### `deliveryConfig`<sup>Optional</sup> <a name="deliveryConfig" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.deliveryConfig"></a>

```java
public PubsubLiteSubscriptionDeliveryConfig getDeliveryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a>

delivery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#delivery_config PubsubLiteSubscription#delivery_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#id PubsubLiteSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#project PubsubLiteSubscription#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#region PubsubLiteSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.timeouts"></a>

```java
public PubsubLiteSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#timeouts PubsubLiteSubscription#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#zone PubsubLiteSubscription#zone}

---

### PubsubLiteSubscriptionDeliveryConfig <a name="PubsubLiteSubscriptionDeliveryConfig" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_subscription.PubsubLiteSubscriptionDeliveryConfig;

PubsubLiteSubscriptionDeliveryConfig.builder()
    .deliveryRequirement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig.property.deliveryRequirement">deliveryRequirement</a></code> | <code>java.lang.String</code> | When this subscription should send messages to subscribers relative to messages persistence in storage. Possible values: ["DELIVER_IMMEDIATELY", "DELIVER_AFTER_STORED", "DELIVERY_REQUIREMENT_UNSPECIFIED"]. |

---

##### `deliveryRequirement`<sup>Required</sup> <a name="deliveryRequirement" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig.property.deliveryRequirement"></a>

```java
public java.lang.String getDeliveryRequirement();
```

- *Type:* java.lang.String

When this subscription should send messages to subscribers relative to messages persistence in storage. Possible values: ["DELIVER_IMMEDIATELY", "DELIVER_AFTER_STORED", "DELIVERY_REQUIREMENT_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#delivery_requirement PubsubLiteSubscription#delivery_requirement}

---

### PubsubLiteSubscriptionTimeouts <a name="PubsubLiteSubscriptionTimeouts" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_subscription.PubsubLiteSubscriptionTimeouts;

PubsubLiteSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#create PubsubLiteSubscription#create}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#delete PubsubLiteSubscription#delete}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#update PubsubLiteSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#create PubsubLiteSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#delete PubsubLiteSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/pubsub_lite_subscription#update PubsubLiteSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubLiteSubscriptionDeliveryConfigOutputReference <a name="PubsubLiteSubscriptionDeliveryConfigOutputReference" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_subscription.PubsubLiteSubscriptionDeliveryConfigOutputReference;

new PubsubLiteSubscriptionDeliveryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirementInput">deliveryRequirementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirement">deliveryRequirement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryRequirementInput`<sup>Optional</sup> <a name="deliveryRequirementInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirementInput"></a>

```java
public java.lang.String getDeliveryRequirementInput();
```

- *Type:* java.lang.String

---

##### `deliveryRequirement`<sup>Required</sup> <a name="deliveryRequirement" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.deliveryRequirement"></a>

```java
public java.lang.String getDeliveryRequirement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfigOutputReference.property.internalValue"></a>

```java
public PubsubLiteSubscriptionDeliveryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionDeliveryConfig">PubsubLiteSubscriptionDeliveryConfig</a>

---


### PubsubLiteSubscriptionTimeoutsOutputReference <a name="PubsubLiteSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_subscription.PubsubLiteSubscriptionTimeoutsOutputReference;

new PubsubLiteSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.pubsubLiteSubscription.PubsubLiteSubscriptionTimeouts">PubsubLiteSubscriptionTimeouts</a>

---



