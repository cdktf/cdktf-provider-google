# `pubsubSubscription` Submodule <a name="`pubsubSubscription` Submodule" id="@cdktf/provider-google.pubsubSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubSubscription <a name="PubsubSubscription" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription google_pubsub_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscription(Construct Scope, string Id, PubsubSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig">PubsubSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig">PubsubSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig">PutBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig">PutCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putDeadLetterPolicy">PutDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putExpirationPolicy">PutExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig">PutPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetAckDeadlineSeconds">ResetAckDeadlineSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetBigqueryConfig">ResetBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetCloudStorageConfig">ResetCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetDeadLetterPolicy">ResetDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetEnableExactlyOnceDelivery">ResetEnableExactlyOnceDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetEnableMessageOrdering">ResetEnableMessageOrdering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetExpirationPolicy">ResetExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetMessageRetentionDuration">ResetMessageRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetPushConfig">ResetPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetRetainAckedMessages">ResetRetainAckedMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryConfig` <a name="PutBigqueryConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig"></a>

```csharp
private void PutBigqueryConfig(PubsubSubscriptionBigqueryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

---

##### `PutCloudStorageConfig` <a name="PutCloudStorageConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig"></a>

```csharp
private void PutCloudStorageConfig(PubsubSubscriptionCloudStorageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

---

##### `PutDeadLetterPolicy` <a name="PutDeadLetterPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putDeadLetterPolicy"></a>

```csharp
private void PutDeadLetterPolicy(PubsubSubscriptionDeadLetterPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putDeadLetterPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

---

##### `PutExpirationPolicy` <a name="PutExpirationPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putExpirationPolicy"></a>

```csharp
private void PutExpirationPolicy(PubsubSubscriptionExpirationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

---

##### `PutPushConfig` <a name="PutPushConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig"></a>

```csharp
private void PutPushConfig(PubsubSubscriptionPushConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(PubsubSubscriptionRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(PubsubSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>

---

##### `ResetAckDeadlineSeconds` <a name="ResetAckDeadlineSeconds" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetAckDeadlineSeconds"></a>

```csharp
private void ResetAckDeadlineSeconds()
```

##### `ResetBigqueryConfig` <a name="ResetBigqueryConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetBigqueryConfig"></a>

```csharp
private void ResetBigqueryConfig()
```

##### `ResetCloudStorageConfig` <a name="ResetCloudStorageConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetCloudStorageConfig"></a>

```csharp
private void ResetCloudStorageConfig()
```

##### `ResetDeadLetterPolicy` <a name="ResetDeadLetterPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetDeadLetterPolicy"></a>

```csharp
private void ResetDeadLetterPolicy()
```

##### `ResetEnableExactlyOnceDelivery` <a name="ResetEnableExactlyOnceDelivery" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetEnableExactlyOnceDelivery"></a>

```csharp
private void ResetEnableExactlyOnceDelivery()
```

##### `ResetEnableMessageOrdering` <a name="ResetEnableMessageOrdering" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetEnableMessageOrdering"></a>

```csharp
private void ResetEnableMessageOrdering()
```

##### `ResetExpirationPolicy` <a name="ResetExpirationPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetExpirationPolicy"></a>

```csharp
private void ResetExpirationPolicy()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMessageRetentionDuration` <a name="ResetMessageRetentionDuration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetMessageRetentionDuration"></a>

```csharp
private void ResetMessageRetentionDuration()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPushConfig` <a name="ResetPushConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetPushConfig"></a>

```csharp
private void ResetPushConfig()
```

##### `ResetRetainAckedMessages` <a name="ResetRetainAckedMessages" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetRetainAckedMessages"></a>

```csharp
private void ResetRetainAckedMessages()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PubsubSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PubsubSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PubsubSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PubsubSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PubsubSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfig">BigqueryConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference">PubsubSubscriptionBigqueryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfig">CloudStorageConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference">PubsubSubscriptionCloudStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicy">DeadLetterPolicy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference">PubsubSubscriptionDeadLetterPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicy">ExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference">PubsubSubscriptionExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfig">PushConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference">PubsubSubscriptionPushConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference">PubsubSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference">PubsubSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSecondsInput">AckDeadlineSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfigInput">BigqueryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfigInput">CloudStorageConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicyInput">DeadLetterPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDeliveryInput">EnableExactlyOnceDeliveryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrderingInput">EnableMessageOrderingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicyInput">ExpirationPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDurationInput">MessageRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfigInput">PushConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessagesInput">RetainAckedMessagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSeconds">AckDeadlineSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDelivery">EnableExactlyOnceDelivery</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrdering">EnableMessageOrdering</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDuration">MessageRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessages">RetainAckedMessages</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.topic">Topic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BigqueryConfig`<sup>Required</sup> <a name="BigqueryConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfig"></a>

```csharp
public PubsubSubscriptionBigqueryConfigOutputReference BigqueryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference">PubsubSubscriptionBigqueryConfigOutputReference</a>

---

##### `CloudStorageConfig`<sup>Required</sup> <a name="CloudStorageConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfig"></a>

```csharp
public PubsubSubscriptionCloudStorageConfigOutputReference CloudStorageConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference">PubsubSubscriptionCloudStorageConfigOutputReference</a>

---

##### `DeadLetterPolicy`<sup>Required</sup> <a name="DeadLetterPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicy"></a>

```csharp
public PubsubSubscriptionDeadLetterPolicyOutputReference DeadLetterPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference">PubsubSubscriptionDeadLetterPolicyOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExpirationPolicy`<sup>Required</sup> <a name="ExpirationPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicy"></a>

```csharp
public PubsubSubscriptionExpirationPolicyOutputReference ExpirationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference">PubsubSubscriptionExpirationPolicyOutputReference</a>

---

##### `PushConfig`<sup>Required</sup> <a name="PushConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfig"></a>

```csharp
public PubsubSubscriptionPushConfigOutputReference PushConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference">PubsubSubscriptionPushConfigOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicy"></a>

```csharp
public PubsubSubscriptionRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference">PubsubSubscriptionRetryPolicyOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.timeouts"></a>

```csharp
public PubsubSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference">PubsubSubscriptionTimeoutsOutputReference</a>

---

##### `AckDeadlineSecondsInput`<sup>Optional</sup> <a name="AckDeadlineSecondsInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSecondsInput"></a>

```csharp
public double AckDeadlineSecondsInput { get; }
```

- *Type:* double

---

##### `BigqueryConfigInput`<sup>Optional</sup> <a name="BigqueryConfigInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfigInput"></a>

```csharp
public PubsubSubscriptionBigqueryConfig BigqueryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

---

##### `CloudStorageConfigInput`<sup>Optional</sup> <a name="CloudStorageConfigInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfigInput"></a>

```csharp
public PubsubSubscriptionCloudStorageConfig CloudStorageConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

---

##### `DeadLetterPolicyInput`<sup>Optional</sup> <a name="DeadLetterPolicyInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicyInput"></a>

```csharp
public PubsubSubscriptionDeadLetterPolicy DeadLetterPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

---

##### `EnableExactlyOnceDeliveryInput`<sup>Optional</sup> <a name="EnableExactlyOnceDeliveryInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDeliveryInput"></a>

```csharp
public object EnableExactlyOnceDeliveryInput { get; }
```

- *Type:* object

---

##### `EnableMessageOrderingInput`<sup>Optional</sup> <a name="EnableMessageOrderingInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrderingInput"></a>

```csharp
public object EnableMessageOrderingInput { get; }
```

- *Type:* object

---

##### `ExpirationPolicyInput`<sup>Optional</sup> <a name="ExpirationPolicyInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicyInput"></a>

```csharp
public PubsubSubscriptionExpirationPolicy ExpirationPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MessageRetentionDurationInput`<sup>Optional</sup> <a name="MessageRetentionDurationInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDurationInput"></a>

```csharp
public string MessageRetentionDurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushConfigInput`<sup>Optional</sup> <a name="PushConfigInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfigInput"></a>

```csharp
public PubsubSubscriptionPushConfig PushConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

---

##### `RetainAckedMessagesInput`<sup>Optional</sup> <a name="RetainAckedMessagesInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessagesInput"></a>

```csharp
public object RetainAckedMessagesInput { get; }
```

- *Type:* object

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicyInput"></a>

```csharp
public PubsubSubscriptionRetryPolicy RetryPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `AckDeadlineSeconds`<sup>Required</sup> <a name="AckDeadlineSeconds" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSeconds"></a>

```csharp
public double AckDeadlineSeconds { get; }
```

- *Type:* double

---

##### `EnableExactlyOnceDelivery`<sup>Required</sup> <a name="EnableExactlyOnceDelivery" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDelivery"></a>

```csharp
public object EnableExactlyOnceDelivery { get; }
```

- *Type:* object

---

##### `EnableMessageOrdering`<sup>Required</sup> <a name="EnableMessageOrdering" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrdering"></a>

```csharp
public object EnableMessageOrdering { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MessageRetentionDuration`<sup>Required</sup> <a name="MessageRetentionDuration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDuration"></a>

```csharp
public string MessageRetentionDuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RetainAckedMessages`<sup>Required</sup> <a name="RetainAckedMessages" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessages"></a>

```csharp
public object RetainAckedMessages { get; }
```

- *Type:* object

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubSubscriptionBigqueryConfig <a name="PubsubSubscriptionBigqueryConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionBigqueryConfig {
    string Table,
    object DropUnknownFields = null,
    object UseTableSchema = null,
    object UseTopicSchema = null,
    object WriteMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.table">Table</a></code> | <code>string</code> | The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.dropUnknownFields">DropUnknownFields</a></code> | <code>object</code> | When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTableSchema">UseTableSchema</a></code> | <code>object</code> | When true, use the BigQuery table's schema as the columns to write to in BigQuery. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTopicSchema">UseTopicSchema</a></code> | <code>object</code> | When true, use the topic's schema as the columns to write to in BigQuery, if it exists. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table. |

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#table PubsubSubscription#table}

---

##### `DropUnknownFields`<sup>Optional</sup> <a name="DropUnknownFields" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.dropUnknownFields"></a>

```csharp
public object DropUnknownFields { get; set; }
```

- *Type:* object

When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas must be kept in sync
and any messages with extra fields are not written and remain in the subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#drop_unknown_fields PubsubSubscription#drop_unknown_fields}

---

##### `UseTableSchema`<sup>Optional</sup> <a name="UseTableSchema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTableSchema"></a>

```csharp
public object UseTableSchema { get; set; }
```

- *Type:* object

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

Messages
must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#use_table_schema PubsubSubscription#use_table_schema}

---

##### `UseTopicSchema`<sup>Optional</sup> <a name="UseTopicSchema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTopicSchema"></a>

```csharp
public object UseTopicSchema { get; set; }
```

- *Type:* object

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#use_topic_schema PubsubSubscription#use_topic_schema}

---

##### `WriteMetadata`<sup>Optional</sup> <a name="WriteMetadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; set; }
```

- *Type:* object

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.

The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

### PubsubSubscriptionCloudStorageConfig <a name="PubsubSubscriptionCloudStorageConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionCloudStorageConfig {
    string Bucket,
    PubsubSubscriptionCloudStorageConfigAvroConfig AvroConfig = null,
    string FilenameDatetimeFormat = null,
    string FilenamePrefix = null,
    string FilenameSuffix = null,
    double MaxBytes = null,
    string MaxDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.bucket">Bucket</a></code> | <code>string</code> | User-provided name for the Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.avroConfig">AvroConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | avro_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat">FilenameDatetimeFormat</a></code> | <code>string</code> | User-provided format string specifying how to represent datetimes in Cloud Storage filenames. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenamePrefix">FilenamePrefix</a></code> | <code>string</code> | User-provided prefix for Cloud Storage filename. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenameSuffix">FilenameSuffix</a></code> | <code>string</code> | User-provided suffix for Cloud Storage filename. Must not end in "/". |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxBytes">MaxBytes</a></code> | <code>double</code> | The maximum bytes that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxDuration">MaxDuration</a></code> | <code>string</code> | The maximum duration that can elapse before a new Cloud Storage file is created. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user. The bucket name must be without any prefix like "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#bucket PubsubSubscription#bucket}

---

##### `AvroConfig`<sup>Optional</sup> <a name="AvroConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.avroConfig"></a>

```csharp
public PubsubSubscriptionCloudStorageConfigAvroConfig AvroConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#avro_config PubsubSubscription#avro_config}

---

##### `FilenameDatetimeFormat`<sup>Optional</sup> <a name="FilenameDatetimeFormat" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenameDatetimeFormat"></a>

```csharp
public string FilenameDatetimeFormat { get; set; }
```

- *Type:* string

User-provided format string specifying how to represent datetimes in Cloud Storage filenames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#filename_datetime_format PubsubSubscription#filename_datetime_format}

---

##### `FilenamePrefix`<sup>Optional</sup> <a name="FilenamePrefix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenamePrefix"></a>

```csharp
public string FilenamePrefix { get; set; }
```

- *Type:* string

User-provided prefix for Cloud Storage filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#filename_prefix PubsubSubscription#filename_prefix}

---

##### `FilenameSuffix`<sup>Optional</sup> <a name="FilenameSuffix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenameSuffix"></a>

```csharp
public string FilenameSuffix { get; set; }
```

- *Type:* string

User-provided suffix for Cloud Storage filename. Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#filename_suffix PubsubSubscription#filename_suffix}

---

##### `MaxBytes`<sup>Optional</sup> <a name="MaxBytes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxBytes"></a>

```csharp
public double MaxBytes { get; set; }
```

- *Type:* double

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB.
The maxBytes limit may be exceeded in cases where messages are larger than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#max_bytes PubsubSubscription#max_bytes}

---

##### `MaxDuration`<sup>Optional</sup> <a name="MaxDuration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxDuration"></a>

```csharp
public string MaxDuration { get; set; }
```

- *Type:* string

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes.
May not exceed the subscription's acknowledgement deadline.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#max_duration PubsubSubscription#max_duration}

---

### PubsubSubscriptionCloudStorageConfigAvroConfig <a name="PubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionCloudStorageConfigAvroConfig {
    object WriteMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output. |

---

##### `WriteMetadata`<sup>Optional</sup> <a name="WriteMetadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; set; }
```

- *Type:* object

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

### PubsubSubscriptionConfig <a name="PubsubSubscriptionConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Topic,
    double AckDeadlineSeconds = null,
    PubsubSubscriptionBigqueryConfig BigqueryConfig = null,
    PubsubSubscriptionCloudStorageConfig CloudStorageConfig = null,
    PubsubSubscriptionDeadLetterPolicy DeadLetterPolicy = null,
    object EnableExactlyOnceDelivery = null,
    object EnableMessageOrdering = null,
    PubsubSubscriptionExpirationPolicy ExpirationPolicy = null,
    string Filter = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string MessageRetentionDuration = null,
    string Project = null,
    PubsubSubscriptionPushConfig PushConfig = null,
    object RetainAckedMessages = null,
    PubsubSubscriptionRetryPolicy RetryPolicy = null,
    PubsubSubscriptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.name">Name</a></code> | <code>string</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.topic">Topic</a></code> | <code>string</code> | A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.ackDeadlineSeconds">AckDeadlineSeconds</a></code> | <code>double</code> | This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.bigqueryConfig">BigqueryConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.cloudStorageConfig">CloudStorageConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.deadLetterPolicy">DeadLetterPolicy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableExactlyOnceDelivery">EnableExactlyOnceDelivery</a></code> | <code>object</code> | If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableMessageOrdering">EnableMessageOrdering</a></code> | <code>object</code> | If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.expirationPolicy">ExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.filter">Filter</a></code> | <code>string</code> | The subscription only delivers the messages that match the filter. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#id PubsubSubscription#id}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to this Subscription. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.messageRetentionDuration">MessageRetentionDuration</a></code> | <code>string</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#project PubsubSubscription#project}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.pushConfig">PushConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retainAckedMessages">RetainAckedMessages</a></code> | <code>object</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#name PubsubSubscription#name}

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#topic PubsubSubscription#topic}

---

##### `AckDeadlineSeconds`<sup>Optional</sup> <a name="AckDeadlineSeconds" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.ackDeadlineSeconds"></a>

```csharp
public double AckDeadlineSeconds { get; set; }
```

- *Type:* double

This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message.

After message
delivery but before the ack deadline expires and before the message is
acknowledged, it is an outstanding message and will not be delivered
again during that time (on a best-effort basis).

For pull subscriptions, this value is used as the initial value for
the ack deadline. To override this value for a given message, call
subscriptions.modifyAckDeadline with the corresponding ackId if using
pull. The minimum custom deadline you can specify is 10 seconds. The
maximum custom deadline you can specify is 600 seconds (10 minutes).
If this parameter is 0, a default value of 10 seconds is used.

For push delivery, this value is also used to set the request timeout
for the call to the push endpoint.

If the subscriber never acknowledges the message, the Pub/Sub system
will eventually redeliver the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#ack_deadline_seconds PubsubSubscription#ack_deadline_seconds}

---

##### `BigqueryConfig`<sup>Optional</sup> <a name="BigqueryConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.bigqueryConfig"></a>

```csharp
public PubsubSubscriptionBigqueryConfig BigqueryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#bigquery_config PubsubSubscription#bigquery_config}

---

##### `CloudStorageConfig`<sup>Optional</sup> <a name="CloudStorageConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.cloudStorageConfig"></a>

```csharp
public PubsubSubscriptionCloudStorageConfig CloudStorageConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#cloud_storage_config PubsubSubscription#cloud_storage_config}

---

##### `DeadLetterPolicy`<sup>Optional</sup> <a name="DeadLetterPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.deadLetterPolicy"></a>

```csharp
public PubsubSubscriptionDeadLetterPolicy DeadLetterPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#dead_letter_policy PubsubSubscription#dead_letter_policy}

---

##### `EnableExactlyOnceDelivery`<sup>Optional</sup> <a name="EnableExactlyOnceDelivery" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableExactlyOnceDelivery"></a>

```csharp
public object EnableExactlyOnceDelivery { get; set; }
```

- *Type:* object

If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

* An acknowledged message will not be resent to a subscriber.

Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#enable_exactly_once_delivery PubsubSubscription#enable_exactly_once_delivery}

---

##### `EnableMessageOrdering`<sup>Optional</sup> <a name="EnableMessageOrdering" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableMessageOrdering"></a>

```csharp
public object EnableMessageOrdering { get; set; }
```

- *Type:* object

If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they
may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#enable_message_ordering PubsubSubscription#enable_message_ordering}

---

##### `ExpirationPolicy`<sup>Optional</sup> <a name="ExpirationPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.expirationPolicy"></a>

```csharp
public PubsubSubscriptionExpirationPolicy ExpirationPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#expiration_policy PubsubSubscription#expiration_policy}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The subscription only delivers the messages that match the filter.

Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#filter PubsubSubscription#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#id PubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to this Subscription.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#labels PubsubSubscription#labels}

---

##### `MessageRetentionDuration`<sup>Optional</sup> <a name="MessageRetentionDuration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.messageRetentionDuration"></a>

```csharp
public string MessageRetentionDuration { get; set; }
```

- *Type:* string

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 7 days ('"604800s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#message_retention_duration PubsubSubscription#message_retention_duration}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#project PubsubSubscription#project}.

---

##### `PushConfig`<sup>Optional</sup> <a name="PushConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.pushConfig"></a>

```csharp
public PubsubSubscriptionPushConfig PushConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#push_config PubsubSubscription#push_config}

---

##### `RetainAckedMessages`<sup>Optional</sup> <a name="RetainAckedMessages" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retainAckedMessages"></a>

```csharp
public object RetainAckedMessages { get; set; }
```

- *Type:* object

Indicates whether to retain acknowledged messages.

If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#retain_acked_messages PubsubSubscription#retain_acked_messages}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retryPolicy"></a>

```csharp
public PubsubSubscriptionRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#retry_policy PubsubSubscription#retry_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.timeouts"></a>

```csharp
public PubsubSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#timeouts PubsubSubscription#timeouts}

---

### PubsubSubscriptionDeadLetterPolicy <a name="PubsubSubscriptionDeadLetterPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionDeadLetterPolicy {
    string DeadLetterTopic = null,
    double MaxDeliveryAttempts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic">DeadLetterTopic</a></code> | <code>string</code> | The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>double</code> | The maximum number of delivery attempts for any message. The value must be between 5 and 100. |

---

##### `DeadLetterTopic`<sup>Optional</sup> <a name="DeadLetterTopic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic"></a>

```csharp
public string DeadLetterTopic { get; set; }
```

- *Type:* string

The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'.

The Cloud Pub/Sub service account associated with the enclosing subscription's
parent project (i.e.,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Publish() to this topic.

The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic
since messages published to a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#dead_letter_topic PubsubSubscription#dead_letter_topic}

---

##### `MaxDeliveryAttempts`<sup>Optional</sup> <a name="MaxDeliveryAttempts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts"></a>

```csharp
public double MaxDeliveryAttempts { get; set; }
```

- *Type:* double

The maximum number of delivery attempts for any message. The value must be between 5 and 100.

The number of delivery attempts is defined as 1 + (the sum of number of
NACKs and number of times the acknowledgement deadline has been exceeded for the message).

A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
client libraries may automatically extend ack_deadlines.

This field will be honored on a best effort basis.

If this parameter is 0, a default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#max_delivery_attempts PubsubSubscription#max_delivery_attempts}

---

### PubsubSubscriptionExpirationPolicy <a name="PubsubSubscriptionExpirationPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionExpirationPolicy {
    string Ttl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy.property.ttl">Ttl</a></code> | <code>string</code> | Specifies the "time-to-live" duration for an associated resource. |

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Specifies the "time-to-live" duration for an associated resource.

The
resource expires if it is not active for a period of ttl.
If ttl is set to "", the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#ttl PubsubSubscription#ttl}

---

### PubsubSubscriptionPushConfig <a name="PubsubSubscriptionPushConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionPushConfig {
    string PushEndpoint,
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    PubsubSubscriptionPushConfigNoWrapper NoWrapper = null,
    PubsubSubscriptionPushConfigOidcToken OidcToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.pushEndpoint">PushEndpoint</a></code> | <code>string</code> | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push". |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Endpoint configuration attributes. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.noWrapper">NoWrapper</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a></code> | no_wrapper block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a></code> | oidc_token block. |

---

##### `PushEndpoint`<sup>Required</sup> <a name="PushEndpoint" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.pushEndpoint"></a>

```csharp
public string PushEndpoint { get; set; }
```

- *Type:* string

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#push_endpoint PubsubSubscription#push_endpoint}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Endpoint configuration attributes.

Every endpoint has a set of API supported attributes that can
be used to control different aspects of the message delivery.

The currently supported attribute is x-goog-version, which you
can use to change the format of the pushed message. This
attribute indicates the version of the data expected by
the endpoint. This controls the shape of the pushed message
(i.e., its fields and metadata). The endpoint version is
based on the version of the Pub/Sub API.

If not present during the subscriptions.create call,
it will default to the version of the API used to make
such call. If not present during a subscriptions.modifyPushConfig
call, its value will not be changed. subscriptions.get
calls will always return a valid version, even if the
subscription was created without this attribute.

The possible values for this attribute are:

* v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
* v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#attributes PubsubSubscription#attributes}

---

##### `NoWrapper`<sup>Optional</sup> <a name="NoWrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.noWrapper"></a>

```csharp
public PubsubSubscriptionPushConfigNoWrapper NoWrapper { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#no_wrapper PubsubSubscription#no_wrapper}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.oidcToken"></a>

```csharp
public PubsubSubscriptionPushConfigOidcToken OidcToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#oidc_token PubsubSubscription#oidc_token}

---

### PubsubSubscriptionPushConfigNoWrapper <a name="PubsubSubscriptionPushConfigNoWrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionPushConfigNoWrapper {
    object WriteMetadata
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. |

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; set; }
```

- *Type:* object

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the
Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

### PubsubSubscriptionPushConfigOidcToken <a name="PubsubSubscriptionPushConfigOidcToken" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionPushConfigOidcToken {
    string ServiceAccountEmail,
    string Audience = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating the OIDC token. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.audience">Audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Service account email to be used for generating the OIDC token.

The caller (for subscriptions.create, subscriptions.patch, and
subscriptions.modifyPushConfig RPCs) must have the
iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience to be used when generating OIDC token.

The audience claim
identifies the recipients that the JWT is intended for. The audience
value is a single case-sensitive string. Having multiple values (array)
for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
Note: if not specified, the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#audience PubsubSubscription#audience}

---

### PubsubSubscriptionRetryPolicy <a name="PubsubSubscriptionRetryPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionRetryPolicy {
    string MaximumBackoff = null,
    string MinimumBackoff = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.maximumBackoff">MaximumBackoff</a></code> | <code>string</code> | The maximum delay between consecutive deliveries of a given message. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.minimumBackoff">MinimumBackoff</a></code> | <code>string</code> | The minimum delay between consecutive deliveries of a given message. |

---

##### `MaximumBackoff`<sup>Optional</sup> <a name="MaximumBackoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.maximumBackoff"></a>

```csharp
public string MaximumBackoff { get; set; }
```

- *Type:* string

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#maximum_backoff PubsubSubscription#maximum_backoff}

---

##### `MinimumBackoff`<sup>Optional</sup> <a name="MinimumBackoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.minimumBackoff"></a>

```csharp
public string MinimumBackoff { get; set; }
```

- *Type:* string

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#minimum_backoff PubsubSubscription#minimum_backoff}

---

### PubsubSubscriptionTimeouts <a name="PubsubSubscriptionTimeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#create PubsubSubscription#create}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#delete PubsubSubscription#delete}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#update PubsubSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#create PubsubSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#delete PubsubSubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.33.0/docs/resources/pubsub_subscription#update PubsubSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubSubscriptionBigqueryConfigOutputReference <a name="PubsubSubscriptionBigqueryConfigOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionBigqueryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields">ResetDropUnknownFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema">ResetUseTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema">ResetUseTopicSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata">ResetWriteMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDropUnknownFields` <a name="ResetDropUnknownFields" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields"></a>

```csharp
private void ResetDropUnknownFields()
```

##### `ResetUseTableSchema` <a name="ResetUseTableSchema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema"></a>

```csharp
private void ResetUseTableSchema()
```

##### `ResetUseTopicSchema` <a name="ResetUseTopicSchema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema"></a>

```csharp
private void ResetUseTopicSchema()
```

##### `ResetWriteMetadata` <a name="ResetWriteMetadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata"></a>

```csharp
private void ResetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput">DropUnknownFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput">UseTableSchemaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput">UseTopicSchemaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">DropUnknownFields</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.table">Table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">UseTableSchema</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">UseTopicSchema</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DropUnknownFieldsInput`<sup>Optional</sup> <a name="DropUnknownFieldsInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput"></a>

```csharp
public object DropUnknownFieldsInput { get; }
```

- *Type:* object

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `UseTableSchemaInput`<sup>Optional</sup> <a name="UseTableSchemaInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput"></a>

```csharp
public object UseTableSchemaInput { get; }
```

- *Type:* object

---

##### `UseTopicSchemaInput`<sup>Optional</sup> <a name="UseTopicSchemaInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput"></a>

```csharp
public object UseTopicSchemaInput { get; }
```

- *Type:* object

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput"></a>

```csharp
public object WriteMetadataInput { get; }
```

- *Type:* object

---

##### `DropUnknownFields`<sup>Required</sup> <a name="DropUnknownFields" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```csharp
public object DropUnknownFields { get; }
```

- *Type:* object

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

##### `UseTableSchema`<sup>Required</sup> <a name="UseTableSchema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```csharp
public object UseTableSchema { get; }
```

- *Type:* object

---

##### `UseTopicSchema`<sup>Required</sup> <a name="UseTopicSchema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```csharp
public object UseTopicSchema { get; }
```

- *Type:* object

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```csharp
public PubsubSubscriptionBigqueryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

---


### PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata">ResetWriteMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWriteMetadata` <a name="ResetWriteMetadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata"></a>

```csharp
private void ResetWriteMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput"></a>

```csharp
public object WriteMetadataInput { get; }
```

- *Type:* object

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```csharp
public PubsubSubscriptionCloudStorageConfigAvroConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### PubsubSubscriptionCloudStorageConfigOutputReference <a name="PubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionCloudStorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig">PutAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig">ResetAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat">ResetFilenameDatetimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix">ResetFilenamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix">ResetFilenameSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes">ResetMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration">ResetMaxDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvroConfig` <a name="PutAvroConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig"></a>

```csharp
private void PutAvroConfig(PubsubSubscriptionCloudStorageConfigAvroConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `ResetAvroConfig` <a name="ResetAvroConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig"></a>

```csharp
private void ResetAvroConfig()
```

##### `ResetFilenameDatetimeFormat` <a name="ResetFilenameDatetimeFormat" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameDatetimeFormat"></a>

```csharp
private void ResetFilenameDatetimeFormat()
```

##### `ResetFilenamePrefix` <a name="ResetFilenamePrefix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix"></a>

```csharp
private void ResetFilenamePrefix()
```

##### `ResetFilenameSuffix` <a name="ResetFilenameSuffix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix"></a>

```csharp
private void ResetFilenameSuffix()
```

##### `ResetMaxBytes` <a name="ResetMaxBytes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes"></a>

```csharp
private void ResetMaxBytes()
```

##### `ResetMaxDuration` <a name="ResetMaxDuration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration"></a>

```csharp
private void ResetMaxDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">AvroConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput">AvroConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput">FilenameDatetimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput">FilenamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput">FilenameSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput">MaxBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput">MaxDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat">FilenameDatetimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">FilenamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">FilenameSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">MaxBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">MaxDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvroConfig`<sup>Required</sup> <a name="AvroConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```csharp
public PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference AvroConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `AvroConfigInput`<sup>Optional</sup> <a name="AvroConfigInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput"></a>

```csharp
public PubsubSubscriptionCloudStorageConfigAvroConfig AvroConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `FilenameDatetimeFormatInput`<sup>Optional</sup> <a name="FilenameDatetimeFormatInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormatInput"></a>

```csharp
public string FilenameDatetimeFormatInput { get; }
```

- *Type:* string

---

##### `FilenamePrefixInput`<sup>Optional</sup> <a name="FilenamePrefixInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput"></a>

```csharp
public string FilenamePrefixInput { get; }
```

- *Type:* string

---

##### `FilenameSuffixInput`<sup>Optional</sup> <a name="FilenameSuffixInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput"></a>

```csharp
public string FilenameSuffixInput { get; }
```

- *Type:* string

---

##### `MaxBytesInput`<sup>Optional</sup> <a name="MaxBytesInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput"></a>

```csharp
public double MaxBytesInput { get; }
```

- *Type:* double

---

##### `MaxDurationInput`<sup>Optional</sup> <a name="MaxDurationInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput"></a>

```csharp
public string MaxDurationInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `FilenameDatetimeFormat`<sup>Required</sup> <a name="FilenameDatetimeFormat" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameDatetimeFormat"></a>

```csharp
public string FilenameDatetimeFormat { get; }
```

- *Type:* string

---

##### `FilenamePrefix`<sup>Required</sup> <a name="FilenamePrefix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```csharp
public string FilenamePrefix { get; }
```

- *Type:* string

---

##### `FilenameSuffix`<sup>Required</sup> <a name="FilenameSuffix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```csharp
public string FilenameSuffix { get; }
```

- *Type:* string

---

##### `MaxBytes`<sup>Required</sup> <a name="MaxBytes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```csharp
public double MaxBytes { get; }
```

- *Type:* double

---

##### `MaxDuration`<sup>Required</sup> <a name="MaxDuration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```csharp
public string MaxDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```csharp
public PubsubSubscriptionCloudStorageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

---


### PubsubSubscriptionDeadLetterPolicyOutputReference <a name="PubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionDeadLetterPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic">ResetDeadLetterTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts">ResetMaxDeliveryAttempts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeadLetterTopic` <a name="ResetDeadLetterTopic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic"></a>

```csharp
private void ResetDeadLetterTopic()
```

##### `ResetMaxDeliveryAttempts` <a name="ResetMaxDeliveryAttempts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts"></a>

```csharp
private void ResetMaxDeliveryAttempts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput">DeadLetterTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput">MaxDeliveryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">DeadLetterTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">MaxDeliveryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeadLetterTopicInput`<sup>Optional</sup> <a name="DeadLetterTopicInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput"></a>

```csharp
public string DeadLetterTopicInput { get; }
```

- *Type:* string

---

##### `MaxDeliveryAttemptsInput`<sup>Optional</sup> <a name="MaxDeliveryAttemptsInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```csharp
public double MaxDeliveryAttemptsInput { get; }
```

- *Type:* double

---

##### `DeadLetterTopic`<sup>Required</sup> <a name="DeadLetterTopic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```csharp
public string DeadLetterTopic { get; }
```

- *Type:* string

---

##### `MaxDeliveryAttempts`<sup>Required</sup> <a name="MaxDeliveryAttempts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```csharp
public double MaxDeliveryAttempts { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```csharp
public PubsubSubscriptionDeadLetterPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

---


### PubsubSubscriptionExpirationPolicyOutputReference <a name="PubsubSubscriptionExpirationPolicyOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionExpirationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```csharp
public PubsubSubscriptionExpirationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

---


### PubsubSubscriptionPushConfigNoWrapperOutputReference <a name="PubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionPushConfigNoWrapperOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput">WriteMetadataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">WriteMetadata</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WriteMetadataInput`<sup>Optional</sup> <a name="WriteMetadataInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput"></a>

```csharp
public object WriteMetadataInput { get; }
```

- *Type:* object

---

##### `WriteMetadata`<sup>Required</sup> <a name="WriteMetadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```csharp
public object WriteMetadata { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```csharp
public PubsubSubscriptionPushConfigNoWrapper InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

---


### PubsubSubscriptionPushConfigOidcTokenOutputReference <a name="PubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionPushConfigOidcTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```csharp
public PubsubSubscriptionPushConfigOidcToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

---


### PubsubSubscriptionPushConfigOutputReference <a name="PubsubSubscriptionPushConfigOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionPushConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putNoWrapper">PutNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putOidcToken">PutOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetNoWrapper">ResetNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetOidcToken">ResetOidcToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNoWrapper` <a name="PutNoWrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putNoWrapper"></a>

```csharp
private void PutNoWrapper(PubsubSubscriptionPushConfigNoWrapper Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putNoWrapper.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

---

##### `PutOidcToken` <a name="PutOidcToken" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putOidcToken"></a>

```csharp
private void PutOidcToken(PubsubSubscriptionPushConfigOidcToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetNoWrapper` <a name="ResetNoWrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetNoWrapper"></a>

```csharp
private void ResetNoWrapper()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetOidcToken"></a>

```csharp
private void ResetOidcToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapper">NoWrapper</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference">PubsubSubscriptionPushConfigNoWrapperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference">PubsubSubscriptionPushConfigOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapperInput">NoWrapperInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput">OidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput">PushEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">PushEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NoWrapper`<sup>Required</sup> <a name="NoWrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```csharp
public PubsubSubscriptionPushConfigNoWrapperOutputReference NoWrapper { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference">PubsubSubscriptionPushConfigNoWrapperOutputReference</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```csharp
public PubsubSubscriptionPushConfigOidcTokenOutputReference OidcToken { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference">PubsubSubscriptionPushConfigOidcTokenOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NoWrapperInput`<sup>Optional</sup> <a name="NoWrapperInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapperInput"></a>

```csharp
public PubsubSubscriptionPushConfigNoWrapper NoWrapperInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput"></a>

```csharp
public PubsubSubscriptionPushConfigOidcToken OidcTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

---

##### `PushEndpointInput`<sup>Optional</sup> <a name="PushEndpointInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput"></a>

```csharp
public string PushEndpointInput { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PushEndpoint`<sup>Required</sup> <a name="PushEndpoint" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```csharp
public string PushEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```csharp
public PubsubSubscriptionPushConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

---


### PubsubSubscriptionRetryPolicyOutputReference <a name="PubsubSubscriptionRetryPolicyOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff">ResetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff">ResetMinimumBackoff</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumBackoff` <a name="ResetMaximumBackoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff"></a>

```csharp
private void ResetMaximumBackoff()
```

##### `ResetMinimumBackoff` <a name="ResetMinimumBackoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff"></a>

```csharp
private void ResetMinimumBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput">MaximumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput">MinimumBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">MaximumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">MinimumBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBackoffInput`<sup>Optional</sup> <a name="MaximumBackoffInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput"></a>

```csharp
public string MaximumBackoffInput { get; }
```

- *Type:* string

---

##### `MinimumBackoffInput`<sup>Optional</sup> <a name="MinimumBackoffInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput"></a>

```csharp
public string MinimumBackoffInput { get; }
```

- *Type:* string

---

##### `MaximumBackoff`<sup>Required</sup> <a name="MaximumBackoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```csharp
public string MaximumBackoff { get; }
```

- *Type:* string

---

##### `MinimumBackoff`<sup>Required</sup> <a name="MinimumBackoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```csharp
public string MinimumBackoff { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public PubsubSubscriptionRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

---


### PubsubSubscriptionTimeoutsOutputReference <a name="PubsubSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



