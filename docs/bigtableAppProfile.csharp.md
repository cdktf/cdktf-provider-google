# `bigtableAppProfile` Submodule <a name="`bigtableAppProfile` Submodule" id="@cdktf/provider-google.bigtableAppProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableAppProfile <a name="BigtableAppProfile" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile google_bigtable_app_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableAppProfile(Construct Scope, string Id, BigtableAppProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig">BigtableAppProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig">BigtableAppProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly">PutDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting">PutSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation">PutStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDataBoostIsolationReadOnly">ResetDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetIgnoreWarnings">ResetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingClusterIds">ResetMultiClusterRoutingClusterIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingUseAny">ResetMultiClusterRoutingUseAny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetRowAffinity">ResetRowAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetSingleClusterRouting">ResetSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetStandardIsolation">ResetStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataBoostIsolationReadOnly` <a name="PutDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly"></a>

```csharp
private void PutDataBoostIsolationReadOnly(BigtableAppProfileDataBoostIsolationReadOnly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putDataBoostIsolationReadOnly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `PutSingleClusterRouting` <a name="PutSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting"></a>

```csharp
private void PutSingleClusterRouting(BigtableAppProfileSingleClusterRouting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putSingleClusterRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---

##### `PutStandardIsolation` <a name="PutStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation"></a>

```csharp
private void PutStandardIsolation(BigtableAppProfileStandardIsolation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putStandardIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(BigtableAppProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

---

##### `ResetDataBoostIsolationReadOnly` <a name="ResetDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDataBoostIsolationReadOnly"></a>

```csharp
private void ResetDataBoostIsolationReadOnly()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreWarnings` <a name="ResetIgnoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetIgnoreWarnings"></a>

```csharp
private void ResetIgnoreWarnings()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetInstance"></a>

```csharp
private void ResetInstance()
```

##### `ResetMultiClusterRoutingClusterIds` <a name="ResetMultiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingClusterIds"></a>

```csharp
private void ResetMultiClusterRoutingClusterIds()
```

##### `ResetMultiClusterRoutingUseAny` <a name="ResetMultiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetMultiClusterRoutingUseAny"></a>

```csharp
private void ResetMultiClusterRoutingUseAny()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRowAffinity` <a name="ResetRowAffinity" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetRowAffinity"></a>

```csharp
private void ResetRowAffinity()
```

##### `ResetSingleClusterRouting` <a name="ResetSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetSingleClusterRouting"></a>

```csharp
private void ResetSingleClusterRouting()
```

##### `ResetStandardIsolation` <a name="ResetStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetStandardIsolation"></a>

```csharp
private void ResetStandardIsolation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableAppProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableAppProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableAppProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableAppProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigtableAppProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BigtableAppProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigtableAppProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigtableAppProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BigtableAppProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnly">DataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference">BigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRouting">SingleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference">BigtableAppProfileSingleClusterRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolation">StandardIsolation</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference">BigtableAppProfileStandardIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference">BigtableAppProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileIdInput">AppProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnlyInput">DataBoostIsolationReadOnlyInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarningsInput">IgnoreWarningsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIdsInput">MultiClusterRoutingClusterIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAnyInput">MultiClusterRoutingUseAnyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinityInput">RowAffinityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRoutingInput">SingleClusterRoutingInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolationInput">StandardIsolationInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileId">AppProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIds">MultiClusterRoutingClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAny">MultiClusterRoutingUseAny</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinity">RowAffinity</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataBoostIsolationReadOnly`<sup>Required</sup> <a name="DataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnly"></a>

```csharp
public BigtableAppProfileDataBoostIsolationReadOnlyOutputReference DataBoostIsolationReadOnly { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference">BigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SingleClusterRouting`<sup>Required</sup> <a name="SingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRouting"></a>

```csharp
public BigtableAppProfileSingleClusterRoutingOutputReference SingleClusterRouting { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference">BigtableAppProfileSingleClusterRoutingOutputReference</a>

---

##### `StandardIsolation`<sup>Required</sup> <a name="StandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolation"></a>

```csharp
public BigtableAppProfileStandardIsolationOutputReference StandardIsolation { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference">BigtableAppProfileStandardIsolationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeouts"></a>

```csharp
public BigtableAppProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference">BigtableAppProfileTimeoutsOutputReference</a>

---

##### `AppProfileIdInput`<sup>Optional</sup> <a name="AppProfileIdInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileIdInput"></a>

```csharp
public string AppProfileIdInput { get; }
```

- *Type:* string

---

##### `DataBoostIsolationReadOnlyInput`<sup>Optional</sup> <a name="DataBoostIsolationReadOnlyInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.dataBoostIsolationReadOnlyInput"></a>

```csharp
public BigtableAppProfileDataBoostIsolationReadOnly DataBoostIsolationReadOnlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreWarningsInput`<sup>Optional</sup> <a name="IgnoreWarningsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarningsInput"></a>

```csharp
public object IgnoreWarningsInput { get; }
```

- *Type:* object

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `MultiClusterRoutingClusterIdsInput`<sup>Optional</sup> <a name="MultiClusterRoutingClusterIdsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIdsInput"></a>

```csharp
public string[] MultiClusterRoutingClusterIdsInput { get; }
```

- *Type:* string[]

---

##### `MultiClusterRoutingUseAnyInput`<sup>Optional</sup> <a name="MultiClusterRoutingUseAnyInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAnyInput"></a>

```csharp
public object MultiClusterRoutingUseAnyInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RowAffinityInput`<sup>Optional</sup> <a name="RowAffinityInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinityInput"></a>

```csharp
public object RowAffinityInput { get; }
```

- *Type:* object

---

##### `SingleClusterRoutingInput`<sup>Optional</sup> <a name="SingleClusterRoutingInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.singleClusterRoutingInput"></a>

```csharp
public BigtableAppProfileSingleClusterRouting SingleClusterRoutingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---

##### `StandardIsolationInput`<sup>Optional</sup> <a name="StandardIsolationInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.standardIsolationInput"></a>

```csharp
public BigtableAppProfileStandardIsolation StandardIsolationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AppProfileId`<sup>Required</sup> <a name="AppProfileId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.appProfileId"></a>

```csharp
public string AppProfileId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreWarnings`<sup>Required</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.ignoreWarnings"></a>

```csharp
public object IgnoreWarnings { get; }
```

- *Type:* object

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `MultiClusterRoutingClusterIds`<sup>Required</sup> <a name="MultiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingClusterIds"></a>

```csharp
public string[] MultiClusterRoutingClusterIds { get; }
```

- *Type:* string[]

---

##### `MultiClusterRoutingUseAny`<sup>Required</sup> <a name="MultiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.multiClusterRoutingUseAny"></a>

```csharp
public object MultiClusterRoutingUseAny { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RowAffinity`<sup>Required</sup> <a name="RowAffinity" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.rowAffinity"></a>

```csharp
public object RowAffinity { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableAppProfileConfig <a name="BigtableAppProfileConfig" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableAppProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppProfileId,
    BigtableAppProfileDataBoostIsolationReadOnly DataBoostIsolationReadOnly = null,
    string Description = null,
    string Id = null,
    object IgnoreWarnings = null,
    string Instance = null,
    string[] MultiClusterRoutingClusterIds = null,
    object MultiClusterRoutingUseAny = null,
    string Project = null,
    object RowAffinity = null,
    BigtableAppProfileSingleClusterRouting SingleClusterRouting = null,
    BigtableAppProfileStandardIsolation StandardIsolation = null,
    BigtableAppProfileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.appProfileId">AppProfileId</a></code> | <code>string</code> | The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dataBoostIsolationReadOnly">DataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | data_boost_isolation_read_only block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.description">Description</a></code> | <code>string</code> | Long form description of the use case for this app profile. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>object</code> | If true, ignore safety checks when deleting/updating the app profile. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.instance">Instance</a></code> | <code>string</code> | The name of the instance to create the app profile within. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingClusterIds">MultiClusterRoutingClusterIds</a></code> | <code>string[]</code> | The set of clusters to route to. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingUseAny">MultiClusterRoutingUseAny</a></code> | <code>object</code> | If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.rowAffinity">RowAffinity</a></code> | <code>object</code> | Must be used with multi-cluster routing. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.singleClusterRouting">SingleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | single_cluster_routing block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.standardIsolation">StandardIsolation</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | standard_isolation block. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppProfileId`<sup>Required</sup> <a name="AppProfileId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.appProfileId"></a>

```csharp
public string AppProfileId { get; set; }
```

- *Type:* string

The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#app_profile_id BigtableAppProfile#app_profile_id}

---

##### `DataBoostIsolationReadOnly`<sup>Optional</sup> <a name="DataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.dataBoostIsolationReadOnly"></a>

```csharp
public BigtableAppProfileDataBoostIsolationReadOnly DataBoostIsolationReadOnly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

data_boost_isolation_read_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#data_boost_isolation_read_only BigtableAppProfile#data_boost_isolation_read_only}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Long form description of the use case for this app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#description BigtableAppProfile#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#id BigtableAppProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreWarnings`<sup>Optional</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.ignoreWarnings"></a>

```csharp
public object IgnoreWarnings { get; set; }
```

- *Type:* object

If true, ignore safety checks when deleting/updating the app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#ignore_warnings BigtableAppProfile#ignore_warnings}

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The name of the instance to create the app profile within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#instance BigtableAppProfile#instance}

---

##### `MultiClusterRoutingClusterIds`<sup>Optional</sup> <a name="MultiClusterRoutingClusterIds" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingClusterIds"></a>

```csharp
public string[] MultiClusterRoutingClusterIds { get; set; }
```

- *Type:* string[]

The set of clusters to route to.

The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#multi_cluster_routing_cluster_ids BigtableAppProfile#multi_cluster_routing_cluster_ids}

---

##### `MultiClusterRoutingUseAny`<sup>Optional</sup> <a name="MultiClusterRoutingUseAny" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.multiClusterRoutingUseAny"></a>

```csharp
public object MultiClusterRoutingUseAny { get; set; }
```

- *Type:* object

If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays.

Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#multi_cluster_routing_use_any BigtableAppProfile#multi_cluster_routing_use_any}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#project BigtableAppProfile#project}.

---

##### `RowAffinity`<sup>Optional</sup> <a name="RowAffinity" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.rowAffinity"></a>

```csharp
public object RowAffinity { get; set; }
```

- *Type:* object

Must be used with multi-cluster routing.

If true, then this app profile will use row affinity sticky routing. With row affinity, Bigtable will route single row key requests based on the row key, rather than randomly. Instead, each row key will be assigned to a cluster by Cloud Bigtable, and will stick to that cluster. Choosing this option improves read-your-writes consistency for most requests under most circumstances, without sacrificing availability. Consistency is not guaranteed, as requests may still fail over between clusters in the event of errors or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#row_affinity BigtableAppProfile#row_affinity}

---

##### `SingleClusterRouting`<sup>Optional</sup> <a name="SingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.singleClusterRouting"></a>

```csharp
public BigtableAppProfileSingleClusterRouting SingleClusterRouting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

single_cluster_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#single_cluster_routing BigtableAppProfile#single_cluster_routing}

---

##### `StandardIsolation`<sup>Optional</sup> <a name="StandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.standardIsolation"></a>

```csharp
public BigtableAppProfileStandardIsolation StandardIsolation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

standard_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#standard_isolation BigtableAppProfile#standard_isolation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileConfig.property.timeouts"></a>

```csharp
public BigtableAppProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts">BigtableAppProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#timeouts BigtableAppProfile#timeouts}

---

### BigtableAppProfileDataBoostIsolationReadOnly <a name="BigtableAppProfileDataBoostIsolationReadOnly" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableAppProfileDataBoostIsolationReadOnly {
    string ComputeBillingOwner
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner">ComputeBillingOwner</a></code> | <code>string</code> | The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"]. |

---

##### `ComputeBillingOwner`<sup>Required</sup> <a name="ComputeBillingOwner" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner"></a>

```csharp
public string ComputeBillingOwner { get; set; }
```

- *Type:* string

The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#compute_billing_owner BigtableAppProfile#compute_billing_owner}

---

### BigtableAppProfileSingleClusterRouting <a name="BigtableAppProfileSingleClusterRouting" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableAppProfileSingleClusterRouting {
    string ClusterId,
    object AllowTransactionalWrites = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.clusterId">ClusterId</a></code> | <code>string</code> | The cluster to which read/write requests should be routed. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites">AllowTransactionalWrites</a></code> | <code>object</code> | If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The cluster to which read/write requests should be routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#cluster_id BigtableAppProfile#cluster_id}

---

##### `AllowTransactionalWrites`<sup>Optional</sup> <a name="AllowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites"></a>

```csharp
public object AllowTransactionalWrites { get; set; }
```

- *Type:* object

If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.

It is unsafe to send these requests to the same table/row/column in multiple clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#allow_transactional_writes BigtableAppProfile#allow_transactional_writes}

---

### BigtableAppProfileStandardIsolation <a name="BigtableAppProfileStandardIsolation" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableAppProfileStandardIsolation {
    string Priority
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.property.priority">Priority</a></code> | <code>string</code> | The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"]. |

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#priority BigtableAppProfile#priority}

---

### BigtableAppProfileTimeouts <a name="BigtableAppProfileTimeouts" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableAppProfileTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#create BigtableAppProfile#create}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#delete BigtableAppProfile#delete}. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#update BigtableAppProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#create BigtableAppProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#delete BigtableAppProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigtable_app_profile#update BigtableAppProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableAppProfileDataBoostIsolationReadOnlyOutputReference <a name="BigtableAppProfileDataBoostIsolationReadOnlyOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableAppProfileDataBoostIsolationReadOnlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput">ComputeBillingOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner">ComputeBillingOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeBillingOwnerInput`<sup>Optional</sup> <a name="ComputeBillingOwnerInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput"></a>

```csharp
public string ComputeBillingOwnerInput { get; }
```

- *Type:* string

---

##### `ComputeBillingOwner`<sup>Required</sup> <a name="ComputeBillingOwner" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner"></a>

```csharp
public string ComputeBillingOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue"></a>

```csharp
public BigtableAppProfileDataBoostIsolationReadOnly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileDataBoostIsolationReadOnly">BigtableAppProfileDataBoostIsolationReadOnly</a>

---


### BigtableAppProfileSingleClusterRoutingOutputReference <a name="BigtableAppProfileSingleClusterRoutingOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableAppProfileSingleClusterRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites">ResetAllowTransactionalWrites</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowTransactionalWrites` <a name="ResetAllowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites"></a>

```csharp
private void ResetAllowTransactionalWrites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput">AllowTransactionalWritesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites">AllowTransactionalWrites</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowTransactionalWritesInput`<sup>Optional</sup> <a name="AllowTransactionalWritesInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput"></a>

```csharp
public object AllowTransactionalWritesInput { get; }
```

- *Type:* object

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `AllowTransactionalWrites`<sup>Required</sup> <a name="AllowTransactionalWrites" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites"></a>

```csharp
public object AllowTransactionalWrites { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue"></a>

```csharp
public BigtableAppProfileSingleClusterRouting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileSingleClusterRouting">BigtableAppProfileSingleClusterRouting</a>

---


### BigtableAppProfileStandardIsolationOutputReference <a name="BigtableAppProfileStandardIsolationOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableAppProfileStandardIsolationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolationOutputReference.property.internalValue"></a>

```csharp
public BigtableAppProfileStandardIsolation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileStandardIsolation">BigtableAppProfileStandardIsolation</a>

---


### BigtableAppProfileTimeoutsOutputReference <a name="BigtableAppProfileTimeoutsOutputReference" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigtableAppProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableAppProfile.BigtableAppProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



