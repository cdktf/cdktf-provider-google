# `iamWorkforcePoolProvider` Submodule <a name="`iamWorkforcePoolProvider` Submodule" id="@cdktf/provider-google.iamWorkforcePoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProvider <a name="IamWorkforcePoolProvider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider google_iam_workforce_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProvider(Construct Scope, string Id, IamWorkforcePoolProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig">IamWorkforcePoolProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig">IamWorkforcePoolProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putExtraAttributesOauth2Client">PutExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc">PutOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeCondition">ResetAttributeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeMapping">ResetAttributeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetExtraAttributesOauth2Client">ResetExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOidc">ResetOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtraAttributesOauth2Client` <a name="PutExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putExtraAttributesOauth2Client"></a>

```csharp
private void PutExtraAttributesOauth2Client(IamWorkforcePoolProviderExtraAttributesOauth2Client Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putExtraAttributesOauth2Client.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---

##### `PutOidc` <a name="PutOidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc"></a>

```csharp
private void PutOidc(IamWorkforcePoolProviderOidc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml"></a>

```csharp
private void PutSaml(IamWorkforcePoolProviderSaml Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts"></a>

```csharp
private void PutTimeouts(IamWorkforcePoolProviderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

---

##### `ResetAttributeCondition` <a name="ResetAttributeCondition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeCondition"></a>

```csharp
private void ResetAttributeCondition()
```

##### `ResetAttributeMapping` <a name="ResetAttributeMapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetAttributeMapping"></a>

```csharp
private void ResetAttributeMapping()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExtraAttributesOauth2Client` <a name="ResetExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetExtraAttributesOauth2Client"></a>

```csharp
private void ResetExtraAttributesOauth2Client()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOidc` <a name="ResetOidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetOidc"></a>

```csharp
private void ResetOidc()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkforcePoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IamWorkforcePoolProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkforcePoolProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkforcePoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2Client">ExtraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference">IamWorkforcePoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference">IamWorkforcePoolProviderSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference">IamWorkforcePoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeConditionInput">AttributeConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMappingInput">AttributeMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2ClientInput">ExtraAttributesOauth2ClientInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidcInput">OidcInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerIdInput">ProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.samlInput">SamlInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolIdInput">WorkforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeCondition">AttributeCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMapping">AttributeMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerId">ProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExtraAttributesOauth2Client`<sup>Required</sup> <a name="ExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2Client"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference ExtraAttributesOauth2Client { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidc"></a>

```csharp
public IamWorkforcePoolProviderOidcOutputReference Oidc { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference">IamWorkforcePoolProviderOidcOutputReference</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.saml"></a>

```csharp
public IamWorkforcePoolProviderSamlOutputReference Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference">IamWorkforcePoolProviderSamlOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeouts"></a>

```csharp
public IamWorkforcePoolProviderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference">IamWorkforcePoolProviderTimeoutsOutputReference</a>

---

##### `AttributeConditionInput`<sup>Optional</sup> <a name="AttributeConditionInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeConditionInput"></a>

```csharp
public string AttributeConditionInput { get; }
```

- *Type:* string

---

##### `AttributeMappingInput`<sup>Optional</sup> <a name="AttributeMappingInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributeMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExtraAttributesOauth2ClientInput`<sup>Optional</sup> <a name="ExtraAttributesOauth2ClientInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.extraAttributesOauth2ClientInput"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2Client ExtraAttributesOauth2ClientInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OidcInput`<sup>Optional</sup> <a name="OidcInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.oidcInput"></a>

```csharp
public IamWorkforcePoolProviderOidc OidcInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerIdInput"></a>

```csharp
public string ProviderIdInput { get; }
```

- *Type:* string

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.samlInput"></a>

```csharp
public IamWorkforcePoolProviderSaml SamlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkforcePoolIdInput`<sup>Optional</sup> <a name="WorkforcePoolIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolIdInput"></a>

```csharp
public string WorkforcePoolIdInput { get; }
```

- *Type:* string

---

##### `AttributeCondition`<sup>Required</sup> <a name="AttributeCondition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeCondition"></a>

```csharp
public string AttributeCondition { get; }
```

- *Type:* string

---

##### `AttributeMapping`<sup>Required</sup> <a name="AttributeMapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.attributeMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributeMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.providerId"></a>

```csharp
public string ProviderId { get; }
```

- *Type:* string

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderConfig <a name="IamWorkforcePoolProviderConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string ProviderId,
    string WorkforcePoolId,
    string AttributeCondition = null,
    System.Collections.Generic.IDictionary<string, string> AttributeMapping = null,
    string Description = null,
    object Disabled = null,
    string DisplayName = null,
    IamWorkforcePoolProviderExtraAttributesOauth2Client ExtraAttributesOauth2Client = null,
    string Id = null,
    IamWorkforcePoolProviderOidc Oidc = null,
    IamWorkforcePoolProviderSaml Saml = null,
    IamWorkforcePoolProviderTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.providerId">ProviderId</a></code> | <code>string</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeCondition">AttributeCondition</a></code> | <code>string</code> | A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeMapping">AttributeMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.description">Description</a></code> | <code>string</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A user-specified display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.extraAttributesOauth2Client">ExtraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | extra_attributes_oauth2_client block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#location IamWorkforcePoolProvider#location}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.providerId"></a>

```csharp
public string ProviderId { get; set; }
```

- *Type:* string

The ID for the provider, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#provider_id IamWorkforcePoolProvider#provider_id}

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; set; }
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#workforce_pool_id IamWorkforcePoolProvider#workforce_pool_id}

---

##### `AttributeCondition`<sup>Optional</sup> <a name="AttributeCondition" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeCondition"></a>

```csharp
public string AttributeCondition { get; set; }
```

- *Type:* string

A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:

* 'assertion': JSON representing the authentication credential issued by the provider.
* 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
  'google.profile_photo' and 'google.display_name' are not supported.
* 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters.
If unspecified, all valid authentication credentials will be accepted.

The following example shows how to only allow credentials with a mapped 'google.groups' value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#attribute_condition IamWorkforcePoolProvider#attribute_condition}

---

##### `AttributeMapping`<sup>Optional</sup> <a name="AttributeMapping" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.attributeMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributeMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:

* 'google.subject': The principal IAM is authenticating. You can reference this value in IAM bindings.
  This is also the subject that appears in Cloud Logging logs. This is a required field and
  the mapped subject cannot exceed 127 bytes.
* 'google.groups': Groups the authenticating user belongs to. You can grant groups access to
  resources using an IAM 'principalSet' binding; access applies to all members of the group.
* 'google.display_name': The name of the authenticated user. This is an optional field and
  the mapped display name cannot exceed 100 bytes. If not set, 'google.subject' will be displayed instead.
  This attribute cannot be referenced in IAM bindings.
* 'google.profile_photo': The URL that specifies the authenticated user's thumbnail photo.
  This is an optional field. When set, the image will be visible as the user's profile picture.
  If not set, a generic user icon will be displayed instead.
  This attribute cannot be referenced in IAM bindings.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}', where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:

* 'google.subject':
  'principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}'
* 'google.groups':
  'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}'
* 'attribute.{custom_attribute}':
  'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For OIDC providers, you must supply a custom mapping that includes the 'google.subject' attribute.
For example, the following maps the sub claim of the incoming credential to the 'subject' attribute
on a Google token:

```
{"google.subject": "assertion.sub"}
```

An object containing a list of '"key": value' pairs.
Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#attribute_mapping IamWorkforcePoolProvider#attribute_mapping}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#description IamWorkforcePoolProvider#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#disabled IamWorkforcePoolProvider#disabled}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A user-specified display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#display_name IamWorkforcePoolProvider#display_name}

---

##### `ExtraAttributesOauth2Client`<sup>Optional</sup> <a name="ExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.extraAttributesOauth2Client"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2Client ExtraAttributesOauth2Client { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

extra_attributes_oauth2_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#extra_attributes_oauth2_client IamWorkforcePoolProvider#extra_attributes_oauth2_client}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Oidc`<sup>Optional</sup> <a name="Oidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.oidc"></a>

```csharp
public IamWorkforcePoolProviderOidc Oidc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#oidc IamWorkforcePoolProvider#oidc}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.saml"></a>

```csharp
public IamWorkforcePoolProviderSaml Saml { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#saml IamWorkforcePoolProvider#saml}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderConfig.property.timeouts"></a>

```csharp
public IamWorkforcePoolProviderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts">IamWorkforcePoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#timeouts IamWorkforcePoolProvider#timeouts}

---

### IamWorkforcePoolProviderExtraAttributesOauth2Client <a name="IamWorkforcePoolProviderExtraAttributesOauth2Client" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderExtraAttributesOauth2Client {
    string AttributesType,
    string ClientId,
    IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret ClientSecret,
    string IssuerUri,
    IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters QueryParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.attributesType">AttributesType</a></code> | <code>string</code> | Represents the IdP and type of claims that should be fetched. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientId">ClientId</a></code> | <code>string</code> | The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | client_secret block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.issuerUri">IssuerUri</a></code> | <code>string</code> | The OIDC identity provider's issuer URI. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.queryParameters">QueryParameters</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | query_parameters block. |

---

##### `AttributesType`<sup>Required</sup> <a name="AttributesType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.attributesType"></a>

```csharp
public string AttributesType { get; set; }
```

- *Type:* string

Represents the IdP and type of claims that should be fetched.

* AZURE_AD_GROUPS_MAIL: Used to get the user's group claims from the Azure AD identity provider using configuration provided
  in ExtraAttributesOAuth2Client and 'mail' property of the 'microsoft.graph.group' object is used for claim mapping.
  See https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties for more details on
  'microsoft.graph.group' properties. The attributes obtained from idntity provider are mapped to 'assertion.groups'. Possible values: ["AZURE_AD_GROUPS_MAIL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#attributes_type IamWorkforcePoolProvider#attributes_type}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientSecret"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret ClientSecret { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#client_secret IamWorkforcePoolProvider#client_secret}

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.issuerUri"></a>

```csharp
public string IssuerUri { get; set; }
```

- *Type:* string

The OIDC identity provider's issuer URI.

Must be a valid URI using the 'https' scheme. Required to get the OIDC discovery document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}

---

##### `QueryParameters`<sup>Optional</sup> <a name="QueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client.property.queryParameters"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters QueryParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

query_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#query_parameters IamWorkforcePoolProvider#query_parameters}

---

### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret {
    IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | value block. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.property.value"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue Value { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#value IamWorkforcePoolProvider#value}

---

### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue {
    string PlainText
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.property.plainText">PlainText</a></code> | <code>string</code> | The plain text of the client secret value. |

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.property.plainText"></a>

```csharp
public string PlainText { get; set; }
```

- *Type:* string

The plain text of the client secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#plain_text IamWorkforcePoolProvider#plain_text}

---

### IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters {
    string Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.property.filter">Filter</a></code> | <code>string</code> | The filter used to request specific records from IdP. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter used to request specific records from IdP.

In case of attributes type as AZURE_AD_GROUPS_MAIL, it represents the
filter used to request specific groups for users from IdP. By default, all of the groups associated with the user are fetched. The
groups should be mail enabled and security enabled. See https://learn.microsoft.com/en-us/graph/search-query-parameter for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#filter IamWorkforcePoolProvider#filter}

---

### IamWorkforcePoolProviderOidc <a name="IamWorkforcePoolProviderOidc" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderOidc {
    string ClientId,
    string IssuerUri,
    IamWorkforcePoolProviderOidcClientSecret ClientSecret = null,
    string JwksJson = null,
    IamWorkforcePoolProviderOidcWebSsoConfig WebSsoConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientId">ClientId</a></code> | <code>string</code> | The client ID. Must match the audience claim of the JWT issued by the identity provider. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.issuerUri">IssuerUri</a></code> | <code>string</code> | The OIDC issuer URI. Must be a valid URI using the 'https' scheme. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a></code> | client_secret block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.jwksJson">JwksJson</a></code> | <code>string</code> | OIDC JWKs in JSON String format. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.webSsoConfig">WebSsoConfig</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | web_sso_config block. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID. Must match the audience claim of the JWT issued by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.issuerUri"></a>

```csharp
public string IssuerUri { get; set; }
```

- *Type:* string

The OIDC issuer URI. Must be a valid URI using the 'https' scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.clientSecret"></a>

```csharp
public IamWorkforcePoolProviderOidcClientSecret ClientSecret { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#client_secret IamWorkforcePoolProvider#client_secret}

---

##### `JwksJson`<sup>Optional</sup> <a name="JwksJson" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.jwksJson"></a>

```csharp
public string JwksJson { get; set; }
```

- *Type:* string

OIDC JWKs in JSON String format.

For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the 'jwks_uri' from the discovery document fetched from the
.well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:

```
{
  "keys": [
    {
          "kty": "RSA/EC",
          "alg": "<algorithm>",
          "use": "sig",
          "kid": "<key-id>",
          "n": "",
          "e": "",
          "x": "",
          "y": "",
          "crv": ""
    }
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#jwks_json IamWorkforcePoolProvider#jwks_json}

---

##### `WebSsoConfig`<sup>Optional</sup> <a name="WebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc.property.webSsoConfig"></a>

```csharp
public IamWorkforcePoolProviderOidcWebSsoConfig WebSsoConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

web_sso_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#web_sso_config IamWorkforcePoolProvider#web_sso_config}

---

### IamWorkforcePoolProviderOidcClientSecret <a name="IamWorkforcePoolProviderOidcClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderOidcClientSecret {
    IamWorkforcePoolProviderOidcClientSecretValue Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a></code> | value block. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret.property.value"></a>

```csharp
public IamWorkforcePoolProviderOidcClientSecretValue Value { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#value IamWorkforcePoolProvider#value}

---

### IamWorkforcePoolProviderOidcClientSecretValue <a name="IamWorkforcePoolProviderOidcClientSecretValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderOidcClientSecretValue {
    string PlainText
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue.property.plainText">PlainText</a></code> | <code>string</code> | The plain text of the client secret value. |

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue.property.plainText"></a>

```csharp
public string PlainText { get; set; }
```

- *Type:* string

The plain text of the client secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#plain_text IamWorkforcePoolProvider#plain_text}

---

### IamWorkforcePoolProviderOidcWebSsoConfig <a name="IamWorkforcePoolProviderOidcWebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderOidcWebSsoConfig {
    string AssertionClaimsBehavior,
    string ResponseType,
    string[] AdditionalScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior">AssertionClaimsBehavior</a></code> | <code>string</code> | The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.responseType">ResponseType</a></code> | <code>string</code> | The Response Type to request for in the OIDC Authorization Request for web sign-in. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.additionalScopes">AdditionalScopes</a></code> | <code>string[]</code> | Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. |

---

##### `AssertionClaimsBehavior`<sup>Required</sup> <a name="AssertionClaimsBehavior" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior"></a>

```csharp
public string AssertionClaimsBehavior { get; set; }
```

- *Type:* string

The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition.

* MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS: Merge the UserInfo Endpoint Claims with ID Token Claims, preferring UserInfo Claim Values for the same Claim Name. This option is available only for the Authorization Code Flow.
* ONLY_ID_TOKEN_CLAIMS: Only include ID Token Claims. Possible values: ["MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS", "ONLY_ID_TOKEN_CLAIMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#assertion_claims_behavior IamWorkforcePoolProvider#assertion_claims_behavior}

---

##### `ResponseType`<sup>Required</sup> <a name="ResponseType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.responseType"></a>

```csharp
public string ResponseType { get; set; }
```

- *Type:* string

The Response Type to request for in the OIDC Authorization Request for web sign-in.

The 'CODE' Response Type is recommended to avoid the Implicit Flow, for security reasons.

* CODE: The 'response_type=code' selection uses the Authorization Code Flow for web sign-in. Requires a configured client secret.
* ID_TOKEN: The 'response_type=id_token' selection uses the Implicit Flow for web sign-in. Possible values: ["CODE", "ID_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#response_type IamWorkforcePoolProvider#response_type}

---

##### `AdditionalScopes`<sup>Optional</sup> <a name="AdditionalScopes" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig.property.additionalScopes"></a>

```csharp
public string[] AdditionalScopes { get; set; }
```

- *Type:* string[]

Additional scopes to request for in the OIDC authentication request on top of scopes requested by default.

By default, the 'openid', 'profile' and 'email' scopes that are supported by the identity provider are requested.
Each additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#additional_scopes IamWorkforcePoolProvider#additional_scopes}

---

### IamWorkforcePoolProviderSaml <a name="IamWorkforcePoolProviderSaml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderSaml {
    string IdpMetadataXml
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>string</code> | SAML Identity provider configuration metadata xml doc. |

---

##### `IdpMetadataXml`<sup>Required</sup> <a name="IdpMetadataXml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml.property.idpMetadataXml"></a>

```csharp
public string IdpMetadataXml { get; set; }
```

- *Type:* string

SAML Identity provider configuration metadata xml doc.

The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
The max size of the acceptable xml document will be bounded to 128k characters.

The metadata xml document should satisfy the following constraints:

1) Must contain an Identity Provider Entity ID.
2) Must contain at least one non-expired signing key certificate.
3) For each signing key:
   a) Valid from should be no more than 7 days from now.
   b) Valid to should be no more than 10 years in the future.
4) Up to 3 IdP signing keys are allowed in the metadata xml.

When updating the provider's metadata xml, at least one non-expired signing key
must overlap with the existing metadata. This requirement is skipped if there are
no non-expired signing keys present in the existing metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#idp_metadata_xml IamWorkforcePoolProvider#idp_metadata_xml}

---

### IamWorkforcePoolProviderTimeouts <a name="IamWorkforcePoolProviderTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue"></a>

```csharp
private void PutValue(IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.value"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.valueInput"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue ValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---


### IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainTextInput">PlainTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainText">PlainText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `PlainTextInput`<sup>Optional</sup> <a name="PlainTextInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainTextInput"></a>

```csharp
public string PlainTextInput { get; }
```

- *Type:* string

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainText"></a>

```csharp
public string PlainText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---


### IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters">PutQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resetQueryParameters">ResetQueryParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret"></a>

```csharp
private void PutClientSecret(IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---

##### `PutQueryParameters` <a name="PutQueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters"></a>

```csharp
private void PutQueryParameters(IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---

##### `ResetQueryParameters` <a name="ResetQueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resetQueryParameters"></a>

```csharp
private void ResetQueryParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParameters">QueryParameters</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesTypeInput">AttributesTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParametersInput">QueryParametersInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesType">AttributesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecret"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference ClientSecret { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference</a>

---

##### `QueryParameters`<sup>Required</sup> <a name="QueryParameters" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParameters"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference QueryParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference</a>

---

##### `AttributesTypeInput`<sup>Optional</sup> <a name="AttributesTypeInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesTypeInput"></a>

```csharp
public string AttributesTypeInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecretInput"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret ClientSecretInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">IamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUriInput"></a>

```csharp
public string IssuerUriInput { get; }
```

- *Type:* string

---

##### `QueryParametersInput`<sup>Optional</sup> <a name="QueryParametersInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParametersInput"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters QueryParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---

##### `AttributesType`<sup>Required</sup> <a name="AttributesType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesType"></a>

```csharp
public string AttributesType { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2Client InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2Client">IamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---


### IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference <a name="IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">IamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---


### IamWorkforcePoolProviderOidcClientSecretOutputReference <a name="IamWorkforcePoolProviderOidcClientSecretOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderOidcClientSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.putValue"></a>

```csharp
private void PutValue(IamWorkforcePoolProviderOidcClientSecretValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference">IamWorkforcePoolProviderOidcClientSecretValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.value"></a>

```csharp
public IamWorkforcePoolProviderOidcClientSecretValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference">IamWorkforcePoolProviderOidcClientSecretValueOutputReference</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.valueInput"></a>

```csharp
public IamWorkforcePoolProviderOidcClientSecretValue ValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolProviderOidcClientSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

---


### IamWorkforcePoolProviderOidcClientSecretValueOutputReference <a name="IamWorkforcePoolProviderOidcClientSecretValueOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderOidcClientSecretValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainTextInput">PlainTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainText">PlainText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `PlainTextInput`<sup>Optional</sup> <a name="PlainTextInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainTextInput"></a>

```csharp
public string PlainTextInput { get; }
```

- *Type:* string

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainText"></a>

```csharp
public string PlainText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolProviderOidcClientSecretValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretValue">IamWorkforcePoolProviderOidcClientSecretValue</a>

---


### IamWorkforcePoolProviderOidcOutputReference <a name="IamWorkforcePoolProviderOidcOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderOidcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig">PutWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetJwksJson">ResetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig">ResetWebSsoConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putClientSecret"></a>

```csharp
private void PutClientSecret(IamWorkforcePoolProviderOidcClientSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

---

##### `PutWebSsoConfig` <a name="PutWebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig"></a>

```csharp
private void PutWebSsoConfig(IamWorkforcePoolProviderOidcWebSsoConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetJwksJson` <a name="ResetJwksJson" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetJwksJson"></a>

```csharp
private void ResetJwksJson()
```

##### `ResetWebSsoConfig` <a name="ResetWebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig"></a>

```csharp
private void ResetWebSsoConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference">IamWorkforcePoolProviderOidcClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig">WebSsoConfig</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference">IamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJsonInput">JwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput">WebSsoConfigInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJson">JwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecret"></a>

```csharp
public IamWorkforcePoolProviderOidcClientSecretOutputReference ClientSecret { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecretOutputReference">IamWorkforcePoolProviderOidcClientSecretOutputReference</a>

---

##### `WebSsoConfig`<sup>Required</sup> <a name="WebSsoConfig" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig"></a>

```csharp
public IamWorkforcePoolProviderOidcWebSsoConfigOutputReference WebSsoConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference">IamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientSecretInput"></a>

```csharp
public IamWorkforcePoolProviderOidcClientSecret ClientSecretInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcClientSecret">IamWorkforcePoolProviderOidcClientSecret</a>

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput"></a>

```csharp
public string IssuerUriInput { get; }
```

- *Type:* string

---

##### `JwksJsonInput`<sup>Optional</sup> <a name="JwksJsonInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJsonInput"></a>

```csharp
public string JwksJsonInput { get; }
```

- *Type:* string

---

##### `WebSsoConfigInput`<sup>Optional</sup> <a name="WebSsoConfigInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput"></a>

```csharp
public IamWorkforcePoolProviderOidcWebSsoConfig WebSsoConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.jwksJson"></a>

```csharp
public string JwksJson { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolProviderOidc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidc">IamWorkforcePoolProviderOidc</a>

---


### IamWorkforcePoolProviderOidcWebSsoConfigOutputReference <a name="IamWorkforcePoolProviderOidcWebSsoConfigOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderOidcWebSsoConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resetAdditionalScopes">ResetAdditionalScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalScopes` <a name="ResetAdditionalScopes" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resetAdditionalScopes"></a>

```csharp
private void ResetAdditionalScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopesInput">AdditionalScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput">AssertionClaimsBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput">ResponseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopes">AdditionalScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior">AssertionClaimsBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType">ResponseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalScopesInput`<sup>Optional</sup> <a name="AdditionalScopesInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopesInput"></a>

```csharp
public string[] AdditionalScopesInput { get; }
```

- *Type:* string[]

---

##### `AssertionClaimsBehaviorInput`<sup>Optional</sup> <a name="AssertionClaimsBehaviorInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput"></a>

```csharp
public string AssertionClaimsBehaviorInput { get; }
```

- *Type:* string

---

##### `ResponseTypeInput`<sup>Optional</sup> <a name="ResponseTypeInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput"></a>

```csharp
public string ResponseTypeInput { get; }
```

- *Type:* string

---

##### `AdditionalScopes`<sup>Required</sup> <a name="AdditionalScopes" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopes"></a>

```csharp
public string[] AdditionalScopes { get; }
```

- *Type:* string[]

---

##### `AssertionClaimsBehavior`<sup>Required</sup> <a name="AssertionClaimsBehavior" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior"></a>

```csharp
public string AssertionClaimsBehavior { get; }
```

- *Type:* string

---

##### `ResponseType`<sup>Required</sup> <a name="ResponseType" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType"></a>

```csharp
public string ResponseType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolProviderOidcWebSsoConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderOidcWebSsoConfig">IamWorkforcePoolProviderOidcWebSsoConfig</a>

---


### IamWorkforcePoolProviderSamlOutputReference <a name="IamWorkforcePoolProviderSamlOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput">IdpMetadataXmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdpMetadataXmlInput`<sup>Optional</sup> <a name="IdpMetadataXmlInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput"></a>

```csharp
public string IdpMetadataXmlInput { get; }
```

- *Type:* string

---

##### `IdpMetadataXml`<sup>Required</sup> <a name="IdpMetadataXml" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```csharp
public string IdpMetadataXml { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSamlOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolProviderSaml InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderSaml">IamWorkforcePoolProviderSaml</a>

---


### IamWorkforcePoolProviderTimeoutsOutputReference <a name="IamWorkforcePoolProviderTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProvider.IamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



