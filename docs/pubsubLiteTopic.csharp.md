# `pubsubLiteTopic` Submodule <a name="`pubsubLiteTopic` Submodule" id="@cdktf/provider-google.pubsubLiteTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubLiteTopic <a name="PubsubLiteTopic" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic google_pubsub_lite_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopic(Construct Scope, string Id, PubsubLiteTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig">PubsubLiteTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig">PubsubLiteTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putPartitionConfig">PutPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putReservationConfig">PutReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putRetentionConfig">PutRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetPartitionConfig">ResetPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetReservationConfig">ResetReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRetentionConfig">ResetRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPartitionConfig` <a name="PutPartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putPartitionConfig"></a>

```csharp
private void PutPartitionConfig(PubsubLiteTopicPartitionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

---

##### `PutReservationConfig` <a name="PutReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putReservationConfig"></a>

```csharp
private void PutReservationConfig(PubsubLiteTopicReservationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putReservationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

---

##### `PutRetentionConfig` <a name="PutRetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putRetentionConfig"></a>

```csharp
private void PutRetentionConfig(PubsubLiteTopicRetentionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putRetentionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putTimeouts"></a>

```csharp
private void PutTimeouts(PubsubLiteTopicTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPartitionConfig` <a name="ResetPartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetPartitionConfig"></a>

```csharp
private void ResetPartitionConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReservationConfig` <a name="ResetReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetReservationConfig"></a>

```csharp
private void ResetReservationConfig()
```

##### `ResetRetentionConfig` <a name="ResetRetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetRetentionConfig"></a>

```csharp
private void ResetRetentionConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PubsubLiteTopic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubLiteTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubLiteTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubLiteTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubLiteTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PubsubLiteTopic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PubsubLiteTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PubsubLiteTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PubsubLiteTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfig">PartitionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference">PubsubLiteTopicPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfig">ReservationConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference">PubsubLiteTopicReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfig">RetentionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference">PubsubLiteTopicRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference">PubsubLiteTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfigInput">PartitionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfigInput">ReservationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfigInput">RetentionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PartitionConfig`<sup>Required</sup> <a name="PartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfig"></a>

```csharp
public PubsubLiteTopicPartitionConfigOutputReference PartitionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference">PubsubLiteTopicPartitionConfigOutputReference</a>

---

##### `ReservationConfig`<sup>Required</sup> <a name="ReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfig"></a>

```csharp
public PubsubLiteTopicReservationConfigOutputReference ReservationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference">PubsubLiteTopicReservationConfigOutputReference</a>

---

##### `RetentionConfig`<sup>Required</sup> <a name="RetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfig"></a>

```csharp
public PubsubLiteTopicRetentionConfigOutputReference RetentionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference">PubsubLiteTopicRetentionConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeouts"></a>

```csharp
public PubsubLiteTopicTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference">PubsubLiteTopicTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionConfigInput`<sup>Optional</sup> <a name="PartitionConfigInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.partitionConfigInput"></a>

```csharp
public PubsubLiteTopicPartitionConfig PartitionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReservationConfigInput`<sup>Optional</sup> <a name="ReservationConfigInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.reservationConfigInput"></a>

```csharp
public PubsubLiteTopicReservationConfig ReservationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

---

##### `RetentionConfigInput`<sup>Optional</sup> <a name="RetentionConfigInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.retentionConfigInput"></a>

```csharp
public PubsubLiteTopicRetentionConfig RetentionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubLiteTopicConfig <a name="PubsubLiteTopicConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    PubsubLiteTopicPartitionConfig PartitionConfig = null,
    string Project = null,
    string Region = null,
    PubsubLiteTopicReservationConfig ReservationConfig = null,
    PubsubLiteTopicRetentionConfig RetentionConfig = null,
    PubsubLiteTopicTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.name">Name</a></code> | <code>string</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#id PubsubLiteTopic#id}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.partitionConfig">PartitionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a></code> | partition_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#project PubsubLiteTopic#project}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.region">Region</a></code> | <code>string</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.reservationConfig">ReservationConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a></code> | reservation_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.retentionConfig">RetentionConfig</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a></code> | retention_config block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.zone">Zone</a></code> | <code>string</code> | The zone of the pubsub lite topic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#name PubsubLiteTopic#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#id PubsubLiteTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionConfig`<sup>Optional</sup> <a name="PartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.partitionConfig"></a>

```csharp
public PubsubLiteTopicPartitionConfig PartitionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#partition_config PubsubLiteTopic#partition_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#project PubsubLiteTopic#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#region PubsubLiteTopic#region}

---

##### `ReservationConfig`<sup>Optional</sup> <a name="ReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.reservationConfig"></a>

```csharp
public PubsubLiteTopicReservationConfig ReservationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

reservation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#reservation_config PubsubLiteTopic#reservation_config}

---

##### `RetentionConfig`<sup>Optional</sup> <a name="RetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.retentionConfig"></a>

```csharp
public PubsubLiteTopicRetentionConfig RetentionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#retention_config PubsubLiteTopic#retention_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.timeouts"></a>

```csharp
public PubsubLiteTopicTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts">PubsubLiteTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#timeouts PubsubLiteTopic#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#zone PubsubLiteTopic#zone}

---

### PubsubLiteTopicPartitionConfig <a name="PubsubLiteTopicPartitionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicPartitionConfig {
    double Count,
    PubsubLiteTopicPartitionConfigCapacity Capacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.count">Count</a></code> | <code>double</code> | The number of partitions in the topic. Must be at least 1. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a></code> | capacity block. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The number of partitions in the topic. Must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#count PubsubLiteTopic#count}

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig.property.capacity"></a>

```csharp
public PubsubLiteTopicPartitionConfigCapacity Capacity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#capacity PubsubLiteTopic#capacity}

---

### PubsubLiteTopicPartitionConfigCapacity <a name="PubsubLiteTopicPartitionConfigCapacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicPartitionConfigCapacity {
    double PublishMibPerSec,
    double SubscribeMibPerSec
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec">PublishMibPerSec</a></code> | <code>double</code> | Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec">SubscribeMibPerSec</a></code> | <code>double</code> | Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |

---

##### `PublishMibPerSec`<sup>Required</sup> <a name="PublishMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec"></a>

```csharp
public double PublishMibPerSec { get; set; }
```

- *Type:* double

Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#publish_mib_per_sec PubsubLiteTopic#publish_mib_per_sec}

---

##### `SubscribeMibPerSec`<sup>Required</sup> <a name="SubscribeMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec"></a>

```csharp
public double SubscribeMibPerSec { get; set; }
```

- *Type:* double

Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#subscribe_mib_per_sec PubsubLiteTopic#subscribe_mib_per_sec}

---

### PubsubLiteTopicReservationConfig <a name="PubsubLiteTopicReservationConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicReservationConfig {
    string ThroughputReservation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig.property.throughputReservation">ThroughputReservation</a></code> | <code>string</code> | The Reservation to use for this topic's throughput capacity. |

---

##### `ThroughputReservation`<sup>Optional</sup> <a name="ThroughputReservation" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig.property.throughputReservation"></a>

```csharp
public string ThroughputReservation { get; set; }
```

- *Type:* string

The Reservation to use for this topic's throughput capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#throughput_reservation PubsubLiteTopic#throughput_reservation}

---

### PubsubLiteTopicRetentionConfig <a name="PubsubLiteTopicRetentionConfig" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicRetentionConfig {
    string PerPartitionBytes,
    string Period = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.perPartitionBytes">PerPartitionBytes</a></code> | <code>string</code> | The provisioned storage, in bytes, per partition. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.period">Period</a></code> | <code>string</code> | How long a published message is retained. |

---

##### `PerPartitionBytes`<sup>Required</sup> <a name="PerPartitionBytes" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.perPartitionBytes"></a>

```csharp
public string PerPartitionBytes { get; set; }
```

- *Type:* string

The provisioned storage, in bytes, per partition.

If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#per_partition_bytes PubsubLiteTopic#per_partition_bytes}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

How long a published message is retained.

If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. A
duration in seconds with up to nine fractional digits, terminated by 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#period PubsubLiteTopic#period}

---

### PubsubLiteTopicTimeouts <a name="PubsubLiteTopicTimeouts" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#create PubsubLiteTopic#create}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#delete PubsubLiteTopic#delete}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#update PubsubLiteTopic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#create PubsubLiteTopic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#delete PubsubLiteTopic#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/pubsub_lite_topic#update PubsubLiteTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubLiteTopicPartitionConfigCapacityOutputReference <a name="PubsubLiteTopicPartitionConfigCapacityOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicPartitionConfigCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput">PublishMibPerSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput">SubscribeMibPerSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec">PublishMibPerSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec">SubscribeMibPerSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublishMibPerSecInput`<sup>Optional</sup> <a name="PublishMibPerSecInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput"></a>

```csharp
public double PublishMibPerSecInput { get; }
```

- *Type:* double

---

##### `SubscribeMibPerSecInput`<sup>Optional</sup> <a name="SubscribeMibPerSecInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput"></a>

```csharp
public double SubscribeMibPerSecInput { get; }
```

- *Type:* double

---

##### `PublishMibPerSec`<sup>Required</sup> <a name="PublishMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec"></a>

```csharp
public double PublishMibPerSec { get; }
```

- *Type:* double

---

##### `SubscribeMibPerSec`<sup>Required</sup> <a name="SubscribeMibPerSec" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec"></a>

```csharp
public double SubscribeMibPerSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue"></a>

```csharp
public PubsubLiteTopicPartitionConfigCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

---


### PubsubLiteTopicPartitionConfigOutputReference <a name="PubsubLiteTopicPartitionConfigOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicPartitionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resetCapacity">ResetCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacity` <a name="PutCapacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.putCapacity"></a>

```csharp
private void PutCapacity(PubsubLiteTopicPartitionConfigCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.resetCapacity"></a>

```csharp
private void ResetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference">PubsubLiteTopicPartitionConfigCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacityInput">CapacityInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacity"></a>

```csharp
public PubsubLiteTopicPartitionConfigCapacityOutputReference Capacity { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacityOutputReference">PubsubLiteTopicPartitionConfigCapacityOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.capacityInput"></a>

```csharp
public PubsubLiteTopicPartitionConfigCapacity CapacityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigCapacity">PubsubLiteTopicPartitionConfigCapacity</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfigOutputReference.property.internalValue"></a>

```csharp
public PubsubLiteTopicPartitionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicPartitionConfig">PubsubLiteTopicPartitionConfig</a>

---


### PubsubLiteTopicReservationConfigOutputReference <a name="PubsubLiteTopicReservationConfigOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicReservationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation">ResetThroughputReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThroughputReservation` <a name="ResetThroughputReservation" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation"></a>

```csharp
private void ResetThroughputReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput">ThroughputReservationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservation">ThroughputReservation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThroughputReservationInput`<sup>Optional</sup> <a name="ThroughputReservationInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput"></a>

```csharp
public string ThroughputReservationInput { get; }
```

- *Type:* string

---

##### `ThroughputReservation`<sup>Required</sup> <a name="ThroughputReservation" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.throughputReservation"></a>

```csharp
public string ThroughputReservation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfigOutputReference.property.internalValue"></a>

```csharp
public PubsubLiteTopicReservationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicReservationConfig">PubsubLiteTopicReservationConfig</a>

---


### PubsubLiteTopicRetentionConfigOutputReference <a name="PubsubLiteTopicRetentionConfigOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicRetentionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput">PerPartitionBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes">PerPartitionBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `PerPartitionBytesInput`<sup>Optional</sup> <a name="PerPartitionBytesInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput"></a>

```csharp
public string PerPartitionBytesInput { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `PerPartitionBytes`<sup>Required</sup> <a name="PerPartitionBytes" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes"></a>

```csharp
public string PerPartitionBytes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfigOutputReference.property.internalValue"></a>

```csharp
public PubsubLiteTopicRetentionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicRetentionConfig">PubsubLiteTopicRetentionConfig</a>

---


### PubsubLiteTopicTimeoutsOutputReference <a name="PubsubLiteTopicTimeoutsOutputReference" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubLiteTopicTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubLiteTopic.PubsubLiteTopicTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



