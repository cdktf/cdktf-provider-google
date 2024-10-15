# `networkSecurityTlsInspectionPolicy` Submodule <a name="`networkSecurityTlsInspectionPolicy` Submodule" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityTlsInspectionPolicy <a name="NetworkSecurityTlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy google_network_security_tls_inspection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityTlsInspectionPolicy(Construct Scope, string Id, NetworkSecurityTlsInspectionPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig">NetworkSecurityTlsInspectionPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig">NetworkSecurityTlsInspectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetCustomTlsFeatures">ResetCustomTlsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetExcludePublicCaSet">ResetExcludePublicCaSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTlsFeatureProfile">ResetTlsFeatureProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTrustConfig">ResetTrustConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecurityTlsInspectionPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a>

---

##### `ResetCustomTlsFeatures` <a name="ResetCustomTlsFeatures" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetCustomTlsFeatures"></a>

```csharp
private void ResetCustomTlsFeatures()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludePublicCaSet` <a name="ResetExcludePublicCaSet" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetExcludePublicCaSet"></a>

```csharp
private void ResetExcludePublicCaSet()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetMinTlsVersion"></a>

```csharp
private void ResetMinTlsVersion()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsFeatureProfile` <a name="ResetTlsFeatureProfile" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTlsFeatureProfile"></a>

```csharp
private void ResetTlsFeatureProfile()
```

##### `ResetTrustConfig` <a name="ResetTrustConfig" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.resetTrustConfig"></a>

```csharp
private void ResetTrustConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityTlsInspectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityTlsInspectionPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityTlsInspectionPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityTlsInspectionPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityTlsInspectionPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkSecurityTlsInspectionPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityTlsInspectionPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityTlsInspectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityTlsInspectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference">NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.caPoolInput">CaPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.customTlsFeaturesInput">CustomTlsFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.excludePublicCaSetInput">ExcludePublicCaSetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfileInput">TlsFeatureProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.trustConfigInput">TrustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.caPool">CaPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.customTlsFeatures">CustomTlsFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.excludePublicCaSet">ExcludePublicCaSet</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfile">TlsFeatureProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.trustConfig">TrustConfig</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.timeouts"></a>

```csharp
public NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference">NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.caPoolInput"></a>

```csharp
public string CaPoolInput { get; }
```

- *Type:* string

---

##### `CustomTlsFeaturesInput`<sup>Optional</sup> <a name="CustomTlsFeaturesInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.customTlsFeaturesInput"></a>

```csharp
public string[] CustomTlsFeaturesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludePublicCaSetInput`<sup>Optional</sup> <a name="ExcludePublicCaSetInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.excludePublicCaSetInput"></a>

```csharp
public object ExcludePublicCaSetInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.minTlsVersionInput"></a>

```csharp
public string MinTlsVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsFeatureProfileInput`<sup>Optional</sup> <a name="TlsFeatureProfileInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfileInput"></a>

```csharp
public string TlsFeatureProfileInput { get; }
```

- *Type:* string

---

##### `TrustConfigInput`<sup>Optional</sup> <a name="TrustConfigInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.trustConfigInput"></a>

```csharp
public string TrustConfigInput { get; }
```

- *Type:* string

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.caPool"></a>

```csharp
public string CaPool { get; }
```

- *Type:* string

---

##### `CustomTlsFeatures`<sup>Required</sup> <a name="CustomTlsFeatures" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.customTlsFeatures"></a>

```csharp
public string[] CustomTlsFeatures { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludePublicCaSet`<sup>Required</sup> <a name="ExcludePublicCaSet" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.excludePublicCaSet"></a>

```csharp
public object ExcludePublicCaSet { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TlsFeatureProfile`<sup>Required</sup> <a name="TlsFeatureProfile" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfile"></a>

```csharp
public string TlsFeatureProfile { get; }
```

- *Type:* string

---

##### `TrustConfig`<sup>Required</sup> <a name="TrustConfig" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.trustConfig"></a>

```csharp
public string TrustConfig { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityTlsInspectionPolicyConfig <a name="NetworkSecurityTlsInspectionPolicyConfig" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityTlsInspectionPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CaPool,
    string Name,
    string[] CustomTlsFeatures = null,
    string Description = null,
    object ExcludePublicCaSet = null,
    string Id = null,
    string Location = null,
    string MinTlsVersion = null,
    string Project = null,
    NetworkSecurityTlsInspectionPolicyTimeouts Timeouts = null,
    string TlsFeatureProfile = null,
    string TrustConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.caPool">CaPool</a></code> | <code>string</code> | A CA pool resource used to issue interception certificates. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.name">Name</a></code> | <code>string</code> | Short name of the TlsInspectionPolicy resource to be created. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.customTlsFeatures">CustomTlsFeatures</a></code> | <code>string[]</code> | List of custom TLS cipher suites selected. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.description">Description</a></code> | <code>string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.excludePublicCaSet">ExcludePublicCaSet</a></code> | <code>object</code> | If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#id NetworkSecurityTlsInspectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.location">Location</a></code> | <code>string</code> | The location of the tls inspection policy. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#project NetworkSecurityTlsInspectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.tlsFeatureProfile">TlsFeatureProfile</a></code> | <code>string</code> | The selected Profile. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.trustConfig">TrustConfig</a></code> | <code>string</code> | A TrustConfig resource used when making a connection to the TLS server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.caPool"></a>

```csharp
public string CaPool { get; set; }
```

- *Type:* string

A CA pool resource used to issue interception certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#ca_pool NetworkSecurityTlsInspectionPolicy#ca_pool}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Short name of the TlsInspectionPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#name NetworkSecurityTlsInspectionPolicy#name}

---

##### `CustomTlsFeatures`<sup>Optional</sup> <a name="CustomTlsFeatures" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.customTlsFeatures"></a>

```csharp
public string[] CustomTlsFeatures { get; set; }
```

- *Type:* string[]

List of custom TLS cipher suites selected.

This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#custom_tls_features NetworkSecurityTlsInspectionPolicy#custom_tls_features}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#description NetworkSecurityTlsInspectionPolicy#description}

---

##### `ExcludePublicCaSet`<sup>Optional</sup> <a name="ExcludePublicCaSet" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.excludePublicCaSet"></a>

```csharp
public object ExcludePublicCaSet { get; set; }
```

- *Type:* object

If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig.

These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#exclude_public_ca_set NetworkSecurityTlsInspectionPolicy#exclude_public_ca_set}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#id NetworkSecurityTlsInspectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the tls inspection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#location NetworkSecurityTlsInspectionPolicy#location}

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; set; }
```

- *Type:* string

Minimum TLS version that the firewall should use when negotiating connections with both clients and servers.

If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Possible values: ["TLS_VERSION_UNSPECIFIED", "TLS_1_0", "TLS_1_1", "TLS_1_2", "TLS_1_3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#min_tls_version NetworkSecurityTlsInspectionPolicy#min_tls_version}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#project NetworkSecurityTlsInspectionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.timeouts"></a>

```csharp
public NetworkSecurityTlsInspectionPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts">NetworkSecurityTlsInspectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#timeouts NetworkSecurityTlsInspectionPolicy#timeouts}

---

##### `TlsFeatureProfile`<sup>Optional</sup> <a name="TlsFeatureProfile" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.tlsFeatureProfile"></a>

```csharp
public string TlsFeatureProfile { get; set; }
```

- *Type:* string

The selected Profile.

If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Possible values: ["PROFILE_UNSPECIFIED", "PROFILE_COMPATIBLE", "PROFILE_MODERN", "PROFILE_RESTRICTED", "PROFILE_CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#tls_feature_profile NetworkSecurityTlsInspectionPolicy#tls_feature_profile}

---

##### `TrustConfig`<sup>Optional</sup> <a name="TrustConfig" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyConfig.property.trustConfig"></a>

```csharp
public string TrustConfig { get; set; }
```

- *Type:* string

A TrustConfig resource used when making a connection to the TLS server.

This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Trust config and the TLS inspection policy must be in the same region. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#trust_config NetworkSecurityTlsInspectionPolicy#trust_config}

---

### NetworkSecurityTlsInspectionPolicyTimeouts <a name="NetworkSecurityTlsInspectionPolicyTimeouts" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityTlsInspectionPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#create NetworkSecurityTlsInspectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#delete NetworkSecurityTlsInspectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#update NetworkSecurityTlsInspectionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#create NetworkSecurityTlsInspectionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#delete NetworkSecurityTlsInspectionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/network_security_tls_inspection_policy#update NetworkSecurityTlsInspectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference <a name="NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityTlsInspectionPolicy.NetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



