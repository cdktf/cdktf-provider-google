# `contactCenterInsightsAnalysisRule` Submodule <a name="`contactCenterInsightsAnalysisRule` Submodule" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsAnalysisRule <a name="ContactCenterInsightsAnalysisRule" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule google_contact_center_insights_analysis_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRule(Construct Scope, string Id, ContactCenterInsightsAnalysisRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig">ContactCenterInsightsAnalysisRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig">ContactCenterInsightsAnalysisRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector">PutAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnalysisPercentage">ResetAnalysisPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnnotatorSelector">ResetAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetConversationFilter">ResetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnnotatorSelector` <a name="PutAnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector"></a>

```csharp
private void PutAnnotatorSelector(ContactCenterInsightsAnalysisRuleAnnotatorSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ContactCenterInsightsAnalysisRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetAnalysisPercentage` <a name="ResetAnalysisPercentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnalysisPercentage"></a>

```csharp
private void ResetAnalysisPercentage()
```

##### `ResetAnnotatorSelector` <a name="ResetAnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetAnnotatorSelector"></a>

```csharp
private void ResetAnnotatorSelector()
```

##### `ResetConversationFilter` <a name="ResetConversationFilter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetConversationFilter"></a>

```csharp
private void ResetConversationFilter()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContactCenterInsightsAnalysisRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContactCenterInsightsAnalysisRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContactCenterInsightsAnalysisRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContactCenterInsightsAnalysisRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContactCenterInsightsAnalysisRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContactCenterInsightsAnalysisRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsAnalysisRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelector">AnnotatorSelector</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference">ContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentageInput">AnalysisPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelectorInput">AnnotatorSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilterInput">ConversationFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentage">AnalysisPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilter">ConversationFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AnnotatorSelector`<sup>Required</sup> <a name="AnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelector"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference AnnotatorSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeouts"></a>

```csharp
public ContactCenterInsightsAnalysisRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference">ContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `AnalysisPercentageInput`<sup>Optional</sup> <a name="AnalysisPercentageInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentageInput"></a>

```csharp
public double AnalysisPercentageInput { get; }
```

- *Type:* double

---

##### `AnnotatorSelectorInput`<sup>Optional</sup> <a name="AnnotatorSelectorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.annotatorSelectorInput"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelector AnnotatorSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `ConversationFilterInput`<sup>Optional</sup> <a name="ConversationFilterInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilterInput"></a>

```csharp
public string ConversationFilterInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `AnalysisPercentage`<sup>Required</sup> <a name="AnalysisPercentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.analysisPercentage"></a>

```csharp
public double AnalysisPercentage { get; }
```

- *Type:* double

---

##### `ConversationFilter`<sup>Required</sup> <a name="ConversationFilter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.conversationFilter"></a>

```csharp
public string ConversationFilter { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsAnalysisRuleAnnotatorSelector <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleAnnotatorSelector {
    string[] IssueModels = null,
    string[] PhraseMatchers = null,
    ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig QaConfig = null,
    object RunEntityAnnotator = null,
    object RunIntentAnnotator = null,
    object RunInterruptionAnnotator = null,
    object RunIssueModelAnnotator = null,
    object RunPhraseMatcherAnnotator = null,
    object RunQaAnnotator = null,
    object RunSentimentAnnotator = null,
    object RunSilenceAnnotator = null,
    object RunSummarizationAnnotator = null,
    ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig SummarizationConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels">IssueModels</a></code> | <code>string[]</code> | The issue model to run. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers">PhraseMatchers</a></code> | <code>string[]</code> | The list of phrase matchers to run. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig">QaConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | qa_config block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator">RunEntityAnnotator</a></code> | <code>object</code> | Whether to run the entity annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator">RunIntentAnnotator</a></code> | <code>object</code> | Whether to run the intent annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator">RunInterruptionAnnotator</a></code> | <code>object</code> | Whether to run the interruption annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator">RunIssueModelAnnotator</a></code> | <code>object</code> | Whether to run the issue model annotator. A model should have already been deployed for this to take effect. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator">RunPhraseMatcherAnnotator</a></code> | <code>object</code> | Whether to run the active phrase matcher annotator(s). |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator">RunQaAnnotator</a></code> | <code>object</code> | Whether to run the QA annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator">RunSentimentAnnotator</a></code> | <code>object</code> | Whether to run the sentiment annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator">RunSilenceAnnotator</a></code> | <code>object</code> | Whether to run the silence annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator">RunSummarizationAnnotator</a></code> | <code>object</code> | Whether to run the summarization annotator. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig">SummarizationConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | summarization_config block. |

---

##### `IssueModels`<sup>Optional</sup> <a name="IssueModels" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels"></a>

```csharp
public string[] IssueModels { get; set; }
```

- *Type:* string[]

The issue model to run.

If not provided, the most recently deployed topic
model will be used. The provided issue model will only be used for
inference if the issue model is deployed and if run_issue_model_annotator
is set to true. If more than one issue model is provided, only the first
provided issue model will be used for inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#issue_models ContactCenterInsightsAnalysisRule#issue_models}

---

##### `PhraseMatchers`<sup>Optional</sup> <a name="PhraseMatchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers"></a>

```csharp
public string[] PhraseMatchers { get; set; }
```

- *Type:* string[]

The list of phrase matchers to run.

If not provided, all active phrase
matchers will be used. If inactive phrase matchers are provided, they will
not be used. Phrase matchers will be run only if
run_phrase_matcher_annotator is set to true. Format:
projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#phrase_matchers ContactCenterInsightsAnalysisRule#phrase_matchers}

---

##### `QaConfig`<sup>Optional</sup> <a name="QaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig QaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

qa_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#qa_config ContactCenterInsightsAnalysisRule#qa_config}

---

##### `RunEntityAnnotator`<sup>Optional</sup> <a name="RunEntityAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator"></a>

```csharp
public object RunEntityAnnotator { get; set; }
```

- *Type:* object

Whether to run the entity annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_entity_annotator ContactCenterInsightsAnalysisRule#run_entity_annotator}

---

##### `RunIntentAnnotator`<sup>Optional</sup> <a name="RunIntentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator"></a>

```csharp
public object RunIntentAnnotator { get; set; }
```

- *Type:* object

Whether to run the intent annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_intent_annotator ContactCenterInsightsAnalysisRule#run_intent_annotator}

---

##### `RunInterruptionAnnotator`<sup>Optional</sup> <a name="RunInterruptionAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator"></a>

```csharp
public object RunInterruptionAnnotator { get; set; }
```

- *Type:* object

Whether to run the interruption annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_interruption_annotator ContactCenterInsightsAnalysisRule#run_interruption_annotator}

---

##### `RunIssueModelAnnotator`<sup>Optional</sup> <a name="RunIssueModelAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator"></a>

```csharp
public object RunIssueModelAnnotator { get; set; }
```

- *Type:* object

Whether to run the issue model annotator. A model should have already been deployed for this to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_issue_model_annotator ContactCenterInsightsAnalysisRule#run_issue_model_annotator}

---

##### `RunPhraseMatcherAnnotator`<sup>Optional</sup> <a name="RunPhraseMatcherAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator"></a>

```csharp
public object RunPhraseMatcherAnnotator { get; set; }
```

- *Type:* object

Whether to run the active phrase matcher annotator(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_phrase_matcher_annotator ContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}

---

##### `RunQaAnnotator`<sup>Optional</sup> <a name="RunQaAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator"></a>

```csharp
public object RunQaAnnotator { get; set; }
```

- *Type:* object

Whether to run the QA annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_qa_annotator ContactCenterInsightsAnalysisRule#run_qa_annotator}

---

##### `RunSentimentAnnotator`<sup>Optional</sup> <a name="RunSentimentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator"></a>

```csharp
public object RunSentimentAnnotator { get; set; }
```

- *Type:* object

Whether to run the sentiment annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_sentiment_annotator ContactCenterInsightsAnalysisRule#run_sentiment_annotator}

---

##### `RunSilenceAnnotator`<sup>Optional</sup> <a name="RunSilenceAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator"></a>

```csharp
public object RunSilenceAnnotator { get; set; }
```

- *Type:* object

Whether to run the silence annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_silence_annotator ContactCenterInsightsAnalysisRule#run_silence_annotator}

---

##### `RunSummarizationAnnotator`<sup>Optional</sup> <a name="RunSummarizationAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator"></a>

```csharp
public object RunSummarizationAnnotator { get; set; }
```

- *Type:* object

Whether to run the summarization annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#run_summarization_annotator ContactCenterInsightsAnalysisRule#run_summarization_annotator}

---

##### `SummarizationConfig`<sup>Optional</sup> <a name="SummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig SummarizationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#summarization_config ContactCenterInsightsAnalysisRule#summarization_config}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig {
    ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct ScorecardList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList">ScorecardList</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | scorecard_list block. |

---

##### `ScorecardList`<sup>Optional</sup> <a name="ScorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct ScorecardList { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

scorecard_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#scorecard_list ContactCenterInsightsAnalysisRule#scorecard_list}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct {
    string[] QaScorecardRevisions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions">QaScorecardRevisions</a></code> | <code>string[]</code> | List of QaScorecardRevisions. |

---

##### `QaScorecardRevisions`<sup>Optional</sup> <a name="QaScorecardRevisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions"></a>

```csharp
public string[] QaScorecardRevisions { get; set; }
```

- *Type:* string[]

List of QaScorecardRevisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#qa_scorecard_revisions ContactCenterInsightsAnalysisRule#qa_scorecard_revisions}

---

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig {
    string ConversationProfile = null,
    string SummarizationModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile">ConversationProfile</a></code> | <code>string</code> | Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel">SummarizationModel</a></code> | <code>string</code> | Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"]. |

---

##### `ConversationProfile`<sup>Optional</sup> <a name="ConversationProfile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile"></a>

```csharp
public string ConversationProfile { get; set; }
```

- *Type:* string

Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#conversation_profile ContactCenterInsightsAnalysisRule#conversation_profile}

---

##### `SummarizationModel`<sup>Optional</sup> <a name="SummarizationModel" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel"></a>

```csharp
public string SummarizationModel { get; set; }
```

- *Type:* string

Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#summarization_model ContactCenterInsightsAnalysisRule#summarization_model}

---

### ContactCenterInsightsAnalysisRuleConfig <a name="ContactCenterInsightsAnalysisRuleConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    object Active = null,
    double AnalysisPercentage = null,
    ContactCenterInsightsAnalysisRuleAnnotatorSelector AnnotatorSelector = null,
    string ConversationFilter = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    ContactCenterInsightsAnalysisRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.location">Location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.active">Active</a></code> | <code>object</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage">AnalysisPercentage</a></code> | <code>double</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector">AnnotatorSelector</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.conversationFilter">ConversationFilter</a></code> | <code>string</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#location ContactCenterInsightsAnalysisRule#location}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#active ContactCenterInsightsAnalysisRule#active}

---

##### `AnalysisPercentage`<sup>Optional</sup> <a name="AnalysisPercentage" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage"></a>

```csharp
public double AnalysisPercentage { get; set; }
```

- *Type:* double

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#analysis_percentage ContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `AnnotatorSelector`<sup>Optional</sup> <a name="AnnotatorSelector" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelector AnnotatorSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#annotator_selector ContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `ConversationFilter`<sup>Optional</sup> <a name="ConversationFilter" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.conversationFilter"></a>

```csharp
public string ConversationFilter { get; set; }
```

- *Type:* string

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#conversation_filter ContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#display_name ContactCenterInsightsAnalysisRule#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleConfig.property.timeouts"></a>

```csharp
public ContactCenterInsightsAnalysisRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts">ContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#timeouts ContactCenterInsightsAnalysisRule#timeouts}

---

### ContactCenterInsightsAnalysisRuleTimeouts <a name="ContactCenterInsightsAnalysisRuleTimeouts" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#create ContactCenterInsightsAnalysisRule#create}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#delete ContactCenterInsightsAnalysisRule#delete}. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#update ContactCenterInsightsAnalysisRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#create ContactCenterInsightsAnalysisRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#delete ContactCenterInsightsAnalysisRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/contact_center_insights_analysis_rule#update ContactCenterInsightsAnalysisRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig">PutQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig">PutSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels">ResetIssueModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers">ResetPhraseMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig">ResetQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator">ResetRunEntityAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator">ResetRunIntentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator">ResetRunInterruptionAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator">ResetRunIssueModelAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator">ResetRunPhraseMatcherAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator">ResetRunQaAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator">ResetRunSentimentAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator">ResetRunSilenceAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator">ResetRunSummarizationAnnotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig">ResetSummarizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQaConfig` <a name="PutQaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig"></a>

```csharp
private void PutQaConfig(ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `PutSummarizationConfig` <a name="PutSummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig"></a>

```csharp
private void PutSummarizationConfig(ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `ResetIssueModels` <a name="ResetIssueModels" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels"></a>

```csharp
private void ResetIssueModels()
```

##### `ResetPhraseMatchers` <a name="ResetPhraseMatchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers"></a>

```csharp
private void ResetPhraseMatchers()
```

##### `ResetQaConfig` <a name="ResetQaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig"></a>

```csharp
private void ResetQaConfig()
```

##### `ResetRunEntityAnnotator` <a name="ResetRunEntityAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator"></a>

```csharp
private void ResetRunEntityAnnotator()
```

##### `ResetRunIntentAnnotator` <a name="ResetRunIntentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator"></a>

```csharp
private void ResetRunIntentAnnotator()
```

##### `ResetRunInterruptionAnnotator` <a name="ResetRunInterruptionAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator"></a>

```csharp
private void ResetRunInterruptionAnnotator()
```

##### `ResetRunIssueModelAnnotator` <a name="ResetRunIssueModelAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator"></a>

```csharp
private void ResetRunIssueModelAnnotator()
```

##### `ResetRunPhraseMatcherAnnotator` <a name="ResetRunPhraseMatcherAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator"></a>

```csharp
private void ResetRunPhraseMatcherAnnotator()
```

##### `ResetRunQaAnnotator` <a name="ResetRunQaAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator"></a>

```csharp
private void ResetRunQaAnnotator()
```

##### `ResetRunSentimentAnnotator` <a name="ResetRunSentimentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator"></a>

```csharp
private void ResetRunSentimentAnnotator()
```

##### `ResetRunSilenceAnnotator` <a name="ResetRunSilenceAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator"></a>

```csharp
private void ResetRunSilenceAnnotator()
```

##### `ResetRunSummarizationAnnotator` <a name="ResetRunSummarizationAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator"></a>

```csharp
private void ResetRunSummarizationAnnotator()
```

##### `ResetSummarizationConfig` <a name="ResetSummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig"></a>

```csharp
private void ResetSummarizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig">QaConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig">SummarizationConfig</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput">IssueModelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput">PhraseMatchersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput">QaConfigInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput">RunEntityAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput">RunIntentAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput">RunInterruptionAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput">RunIssueModelAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput">RunPhraseMatcherAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput">RunQaAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput">RunSentimentAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput">RunSilenceAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput">RunSummarizationAnnotatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput">SummarizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels">IssueModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers">PhraseMatchers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator">RunEntityAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator">RunIntentAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator">RunInterruptionAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator">RunIssueModelAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator">RunPhraseMatcherAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator">RunQaAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator">RunSentimentAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator">RunSilenceAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator">RunSummarizationAnnotator</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QaConfig`<sup>Required</sup> <a name="QaConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference QaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a>

---

##### `SummarizationConfig`<sup>Required</sup> <a name="SummarizationConfig" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference SummarizationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a>

---

##### `IssueModelsInput`<sup>Optional</sup> <a name="IssueModelsInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput"></a>

```csharp
public string[] IssueModelsInput { get; }
```

- *Type:* string[]

---

##### `PhraseMatchersInput`<sup>Optional</sup> <a name="PhraseMatchersInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput"></a>

```csharp
public string[] PhraseMatchersInput { get; }
```

- *Type:* string[]

---

##### `QaConfigInput`<sup>Optional</sup> <a name="QaConfigInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig QaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `RunEntityAnnotatorInput`<sup>Optional</sup> <a name="RunEntityAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput"></a>

```csharp
public object RunEntityAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunIntentAnnotatorInput`<sup>Optional</sup> <a name="RunIntentAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput"></a>

```csharp
public object RunIntentAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunInterruptionAnnotatorInput`<sup>Optional</sup> <a name="RunInterruptionAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput"></a>

```csharp
public object RunInterruptionAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunIssueModelAnnotatorInput`<sup>Optional</sup> <a name="RunIssueModelAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput"></a>

```csharp
public object RunIssueModelAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunPhraseMatcherAnnotatorInput`<sup>Optional</sup> <a name="RunPhraseMatcherAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput"></a>

```csharp
public object RunPhraseMatcherAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunQaAnnotatorInput`<sup>Optional</sup> <a name="RunQaAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput"></a>

```csharp
public object RunQaAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunSentimentAnnotatorInput`<sup>Optional</sup> <a name="RunSentimentAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput"></a>

```csharp
public object RunSentimentAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunSilenceAnnotatorInput`<sup>Optional</sup> <a name="RunSilenceAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput"></a>

```csharp
public object RunSilenceAnnotatorInput { get; }
```

- *Type:* object

---

##### `RunSummarizationAnnotatorInput`<sup>Optional</sup> <a name="RunSummarizationAnnotatorInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput"></a>

```csharp
public object RunSummarizationAnnotatorInput { get; }
```

- *Type:* object

---

##### `SummarizationConfigInput`<sup>Optional</sup> <a name="SummarizationConfigInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig SummarizationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `IssueModels`<sup>Required</sup> <a name="IssueModels" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels"></a>

```csharp
public string[] IssueModels { get; }
```

- *Type:* string[]

---

##### `PhraseMatchers`<sup>Required</sup> <a name="PhraseMatchers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers"></a>

```csharp
public string[] PhraseMatchers { get; }
```

- *Type:* string[]

---

##### `RunEntityAnnotator`<sup>Required</sup> <a name="RunEntityAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator"></a>

```csharp
public object RunEntityAnnotator { get; }
```

- *Type:* object

---

##### `RunIntentAnnotator`<sup>Required</sup> <a name="RunIntentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator"></a>

```csharp
public object RunIntentAnnotator { get; }
```

- *Type:* object

---

##### `RunInterruptionAnnotator`<sup>Required</sup> <a name="RunInterruptionAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator"></a>

```csharp
public object RunInterruptionAnnotator { get; }
```

- *Type:* object

---

##### `RunIssueModelAnnotator`<sup>Required</sup> <a name="RunIssueModelAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator"></a>

```csharp
public object RunIssueModelAnnotator { get; }
```

- *Type:* object

---

##### `RunPhraseMatcherAnnotator`<sup>Required</sup> <a name="RunPhraseMatcherAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator"></a>

```csharp
public object RunPhraseMatcherAnnotator { get; }
```

- *Type:* object

---

##### `RunQaAnnotator`<sup>Required</sup> <a name="RunQaAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator"></a>

```csharp
public object RunQaAnnotator { get; }
```

- *Type:* object

---

##### `RunSentimentAnnotator`<sup>Required</sup> <a name="RunSentimentAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator"></a>

```csharp
public object RunSentimentAnnotator { get; }
```

- *Type:* object

---

##### `RunSilenceAnnotator`<sup>Required</sup> <a name="RunSilenceAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator"></a>

```csharp
public object RunSilenceAnnotator { get; }
```

- *Type:* object

---

##### `RunSummarizationAnnotator`<sup>Required</sup> <a name="RunSummarizationAnnotator" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator"></a>

```csharp
public object RunSummarizationAnnotator { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelector">ContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList">PutScorecardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList">ResetScorecardList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScorecardList` <a name="PutScorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList"></a>

```csharp
private void PutScorecardList(ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `ResetScorecardList` <a name="ResetScorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList"></a>

```csharp
private void ResetScorecardList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList">ScorecardList</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput">ScorecardListInput</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScorecardList`<sup>Required</sup> <a name="ScorecardList" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference ScorecardList { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a>

---

##### `ScorecardListInput`<sup>Optional</sup> <a name="ScorecardListInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct ScorecardListInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions">ResetQaScorecardRevisions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQaScorecardRevisions` <a name="ResetQaScorecardRevisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions"></a>

```csharp
private void ResetQaScorecardRevisions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput">QaScorecardRevisionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions">QaScorecardRevisions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QaScorecardRevisionsInput`<sup>Optional</sup> <a name="QaScorecardRevisionsInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput"></a>

```csharp
public string[] QaScorecardRevisionsInput { get; }
```

- *Type:* string[]

---

##### `QaScorecardRevisions`<sup>Required</sup> <a name="QaScorecardRevisions" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions"></a>

```csharp
public string[] QaScorecardRevisions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---


### ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference <a name="ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile">ResetConversationProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel">ResetSummarizationModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConversationProfile` <a name="ResetConversationProfile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile"></a>

```csharp
private void ResetConversationProfile()
```

##### `ResetSummarizationModel` <a name="ResetSummarizationModel" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel"></a>

```csharp
private void ResetSummarizationModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput">ConversationProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput">SummarizationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile">ConversationProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel">SummarizationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConversationProfileInput`<sup>Optional</sup> <a name="ConversationProfileInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput"></a>

```csharp
public string ConversationProfileInput { get; }
```

- *Type:* string

---

##### `SummarizationModelInput`<sup>Optional</sup> <a name="SummarizationModelInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput"></a>

```csharp
public string SummarizationModelInput { get; }
```

- *Type:* string

---

##### `ConversationProfile`<sup>Required</sup> <a name="ConversationProfile" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile"></a>

```csharp
public string ConversationProfile { get; }
```

- *Type:* string

---

##### `SummarizationModel`<sup>Required</sup> <a name="SummarizationModel" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel"></a>

```csharp
public string SummarizationModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue"></a>

```csharp
public ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---


### ContactCenterInsightsAnalysisRuleTimeoutsOutputReference <a name="ContactCenterInsightsAnalysisRuleTimeoutsOutputReference" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContactCenterInsightsAnalysisRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.contactCenterInsightsAnalysisRule.ContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



