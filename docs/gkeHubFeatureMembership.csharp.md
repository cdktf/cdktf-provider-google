# `google_gke_hub_feature_membership`

Refer to the Terraform Registory for docs: [`google_gke_hub_feature_membership`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership).

# `gkeHubFeatureMembership` Submodule <a name="`gkeHubFeatureMembership` Submodule" id="@cdktf/provider-google.gkeHubFeatureMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubFeatureMembership <a name="GkeHubFeatureMembership" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership google_gke_hub_feature_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembership(Construct Scope, string Id, GkeHubFeatureMembershipConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig">GkeHubFeatureMembershipConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig">GkeHubFeatureMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putConfigmanagement">PutConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putMesh">PutMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetConfigmanagement">ResetConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetMesh">ResetMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutConfigmanagement` <a name="PutConfigmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putConfigmanagement"></a>

```csharp
private void PutConfigmanagement(GkeHubFeatureMembershipConfigmanagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putConfigmanagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

---

##### `PutMesh` <a name="PutMesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putMesh"></a>

```csharp
private void PutMesh(GkeHubFeatureMembershipMesh Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putMesh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putTimeouts"></a>

```csharp
private void PutTimeouts(GkeHubFeatureMembershipTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a>

---

##### `ResetConfigmanagement` <a name="ResetConfigmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetConfigmanagement"></a>

```csharp
private void ResetConfigmanagement()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMesh` <a name="ResetMesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetMesh"></a>

```csharp
private void ResetMesh()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeHubFeatureMembership resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeHubFeatureMembership.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeHubFeatureMembership.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeHubFeatureMembership.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeHubFeatureMembership.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GkeHubFeatureMembership resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeHubFeatureMembership to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeHubFeatureMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GkeHubFeatureMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagement">Configmanagement</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference">GkeHubFeatureMembershipConfigmanagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.mesh">Mesh</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference">GkeHubFeatureMembershipMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference">GkeHubFeatureMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagementInput">ConfigmanagementInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.featureInput">FeatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membershipInput">MembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.meshInput">MeshInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.feature">Feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Configmanagement`<sup>Required</sup> <a name="Configmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagement"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementOutputReference Configmanagement { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference">GkeHubFeatureMembershipConfigmanagementOutputReference</a>

---

##### `Mesh`<sup>Required</sup> <a name="Mesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.mesh"></a>

```csharp
public GkeHubFeatureMembershipMeshOutputReference Mesh { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference">GkeHubFeatureMembershipMeshOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeouts"></a>

```csharp
public GkeHubFeatureMembershipTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference">GkeHubFeatureMembershipTimeoutsOutputReference</a>

---

##### `ConfigmanagementInput`<sup>Optional</sup> <a name="ConfigmanagementInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.configmanagementInput"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagement ConfigmanagementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

---

##### `FeatureInput`<sup>Optional</sup> <a name="FeatureInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.featureInput"></a>

```csharp
public string FeatureInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembershipInput`<sup>Optional</sup> <a name="MembershipInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membershipInput"></a>

```csharp
public string MembershipInput { get; }
```

- *Type:* string

---

##### `MeshInput`<sup>Optional</sup> <a name="MeshInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.meshInput"></a>

```csharp
public GkeHubFeatureMembershipMesh MeshInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.feature"></a>

```csharp
public string Feature { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembership.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubFeatureMembershipConfig <a name="GkeHubFeatureMembershipConfig" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Feature,
    string Location,
    string Membership,
    GkeHubFeatureMembershipConfigmanagement Configmanagement = null,
    string Id = null,
    GkeHubFeatureMembershipMesh Mesh = null,
    string Project = null,
    GkeHubFeatureMembershipTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.feature">Feature</a></code> | <code>string</code> | The name of the feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.location">Location</a></code> | <code>string</code> | The location of the feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.membership">Membership</a></code> | <code>string</code> | The name of the membership. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.configmanagement">Configmanagement</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a></code> | configmanagement block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#id GkeHubFeatureMembership#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.mesh">Mesh</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a></code> | mesh block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.project">Project</a></code> | <code>string</code> | The project of the feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Feature`<sup>Required</sup> <a name="Feature" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.feature"></a>

```csharp
public string Feature { get; set; }
```

- *Type:* string

The name of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#feature GkeHubFeatureMembership#feature}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#location GkeHubFeatureMembership#location}

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.membership"></a>

```csharp
public string Membership { get; set; }
```

- *Type:* string

The name of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#membership GkeHubFeatureMembership#membership}

---

##### `Configmanagement`<sup>Optional</sup> <a name="Configmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.configmanagement"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagement Configmanagement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

configmanagement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#configmanagement GkeHubFeatureMembership#configmanagement}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#id GkeHubFeatureMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mesh`<sup>Optional</sup> <a name="Mesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.mesh"></a>

```csharp
public GkeHubFeatureMembershipMesh Mesh { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#mesh GkeHubFeatureMembership#mesh}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#project GkeHubFeatureMembership#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfig.property.timeouts"></a>

```csharp
public GkeHubFeatureMembershipTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts">GkeHubFeatureMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#timeouts GkeHubFeatureMembership#timeouts}

---

### GkeHubFeatureMembershipConfigmanagement <a name="GkeHubFeatureMembershipConfigmanagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagement {
    GkeHubFeatureMembershipConfigmanagementBinauthz Binauthz = null,
    GkeHubFeatureMembershipConfigmanagementConfigSync ConfigSync = null,
    GkeHubFeatureMembershipConfigmanagementHierarchyController HierarchyController = null,
    GkeHubFeatureMembershipConfigmanagementPolicyController PolicyController = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.binauthz">Binauthz</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | binauthz block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.configSync">ConfigSync</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | config_sync block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.hierarchyController">HierarchyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | hierarchy_controller block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.policyController">PolicyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | policy_controller block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.version">Version</a></code> | <code>string</code> | Optional. Version of ACM to install. Defaults to the latest version. |

---

##### `Binauthz`<sup>Optional</sup> <a name="Binauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.binauthz"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementBinauthz Binauthz { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

binauthz block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#binauthz GkeHubFeatureMembership#binauthz}

---

##### `ConfigSync`<sup>Optional</sup> <a name="ConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.configSync"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSync ConfigSync { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

config_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#config_sync GkeHubFeatureMembership#config_sync}

---

##### `HierarchyController`<sup>Optional</sup> <a name="HierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.hierarchyController"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementHierarchyController HierarchyController { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

hierarchy_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#hierarchy_controller GkeHubFeatureMembership#hierarchy_controller}

---

##### `PolicyController`<sup>Optional</sup> <a name="PolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.policyController"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementPolicyController PolicyController { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

policy_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#policy_controller GkeHubFeatureMembership#policy_controller}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Optional. Version of ACM to install. Defaults to the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#version GkeHubFeatureMembership#version}

---

### GkeHubFeatureMembershipConfigmanagementBinauthz <a name="GkeHubFeatureMembershipConfigmanagementBinauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementBinauthz {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz.property.enabled">Enabled</a></code> | <code>object</code> | Whether binauthz is enabled in this cluster. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether binauthz is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}

---

### GkeHubFeatureMembershipConfigmanagementConfigSync <a name="GkeHubFeatureMembershipConfigmanagementConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementConfigSync {
    GkeHubFeatureMembershipConfigmanagementConfigSyncGit Git = null,
    GkeHubFeatureMembershipConfigmanagementConfigSyncOci Oci = null,
    object PreventDrift = null,
    string SourceFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.git">Git</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | git block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.oci">Oci</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | oci block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.preventDrift">PreventDrift</a></code> | <code>object</code> | Set to true to enable the Config Sync admission webhook to prevent drifts. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode. |

---

##### `Git`<sup>Optional</sup> <a name="Git" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.git"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSyncGit Git { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#git GkeHubFeatureMembership#git}

---

##### `Oci`<sup>Optional</sup> <a name="Oci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.oci"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSyncOci Oci { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#oci GkeHubFeatureMembership#oci}

---

##### `PreventDrift`<sup>Optional</sup> <a name="PreventDrift" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.preventDrift"></a>

```csharp
public object PreventDrift { get; set; }
```

- *Type:* object

Set to true to enable the Config Sync admission webhook to prevent drifts.

If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#prevent_drift GkeHubFeatureMembership#prevent_drift}

---

##### `SourceFormat`<sup>Optional</sup> <a name="SourceFormat" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; set; }
```

- *Type:* string

Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#source_format GkeHubFeatureMembership#source_format}

---

### GkeHubFeatureMembershipConfigmanagementConfigSyncGit <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncGit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementConfigSyncGit {
    string GcpServiceAccountEmail = null,
    string HttpsProxy = null,
    string PolicyDir = null,
    string SecretType = null,
    string SyncBranch = null,
    string SyncRepo = null,
    string SyncRev = null,
    string SyncWaitSecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | The GCP Service Account Email used for auth when secretType is gcpServiceAccount. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.httpsProxy">HttpsProxy</a></code> | <code>string</code> | URL for the HTTPS proxy to be used when communicating with the Git repo. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.policyDir">PolicyDir</a></code> | <code>string</code> | The path within the Git repository that represents the top level of the repo to sync. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.secretType">SecretType</a></code> | <code>string</code> | Type of secret configured for access to the Git repo. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncBranch">SyncBranch</a></code> | <code>string</code> | The branch of the repository to sync from. Default: master. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRepo">SyncRepo</a></code> | <code>string</code> | The URL of the Git repository to use as the source of truth. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRev">SyncRev</a></code> | <code>string</code> | Git revision (tag or hash) to check out. Default HEAD. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>string</code> | Period in seconds between consecutive syncs. Default: 15. |

---

##### `GcpServiceAccountEmail`<sup>Optional</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; set; }
```

- *Type:* string

The GCP Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#gcp_service_account_email GkeHubFeatureMembership#gcp_service_account_email}

---

##### `HttpsProxy`<sup>Optional</sup> <a name="HttpsProxy" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.httpsProxy"></a>

```csharp
public string HttpsProxy { get; set; }
```

- *Type:* string

URL for the HTTPS proxy to be used when communicating with the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#https_proxy GkeHubFeatureMembership#https_proxy}

---

##### `PolicyDir`<sup>Optional</sup> <a name="PolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.policyDir"></a>

```csharp
public string PolicyDir { get; set; }
```

- *Type:* string

The path within the Git repository that represents the top level of the repo to sync.

Default: the root directory of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#policy_dir GkeHubFeatureMembership#policy_dir}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.secretType"></a>

```csharp
public string SecretType { get; set; }
```

- *Type:* string

Type of secret configured for access to the Git repo.

Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#secret_type GkeHubFeatureMembership#secret_type}

---

##### `SyncBranch`<sup>Optional</sup> <a name="SyncBranch" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncBranch"></a>

```csharp
public string SyncBranch { get; set; }
```

- *Type:* string

The branch of the repository to sync from. Default: master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_branch GkeHubFeatureMembership#sync_branch}

---

##### `SyncRepo`<sup>Optional</sup> <a name="SyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRepo"></a>

```csharp
public string SyncRepo { get; set; }
```

- *Type:* string

The URL of the Git repository to use as the source of truth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_repo GkeHubFeatureMembership#sync_repo}

---

##### `SyncRev`<sup>Optional</sup> <a name="SyncRev" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncRev"></a>

```csharp
public string SyncRev { get; set; }
```

- *Type:* string

Git revision (tag or hash) to check out. Default HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_rev GkeHubFeatureMembership#sync_rev}

---

##### `SyncWaitSecs`<sup>Optional</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit.property.syncWaitSecs"></a>

```csharp
public string SyncWaitSecs { get; set; }
```

- *Type:* string

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_wait_secs GkeHubFeatureMembership#sync_wait_secs}

---

### GkeHubFeatureMembershipConfigmanagementConfigSyncOci <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncOci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementConfigSyncOci {
    string GcpServiceAccountEmail = null,
    string PolicyDir = null,
    string SecretType = null,
    string SyncRepo = null,
    string SyncWaitSecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | The GCP Service Account Email used for auth when secret_type is gcpserviceaccount. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.policyDir">PolicyDir</a></code> | <code>string</code> | The absolute path of the directory that contains the local resources. Default: the root directory of the image. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.secretType">SecretType</a></code> | <code>string</code> | Type of secret configured for access to the OCI Image. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncRepo">SyncRepo</a></code> | <code>string</code> | The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>string</code> | Period in seconds(int64 format) between consecutive syncs. Default: 15. |

---

##### `GcpServiceAccountEmail`<sup>Optional</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; set; }
```

- *Type:* string

The GCP Service Account Email used for auth when secret_type is gcpserviceaccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#gcp_service_account_email GkeHubFeatureMembership#gcp_service_account_email}

---

##### `PolicyDir`<sup>Optional</sup> <a name="PolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.policyDir"></a>

```csharp
public string PolicyDir { get; set; }
```

- *Type:* string

The absolute path of the directory that contains the local resources. Default: the root directory of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#policy_dir GkeHubFeatureMembership#policy_dir}

---

##### `SecretType`<sup>Optional</sup> <a name="SecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.secretType"></a>

```csharp
public string SecretType { get; set; }
```

- *Type:* string

Type of secret configured for access to the OCI Image.

Must be one of gcenode, gcpserviceaccount or none. The validation of this is case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#secret_type GkeHubFeatureMembership#secret_type}

---

##### `SyncRepo`<sup>Optional</sup> <a name="SyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncRepo"></a>

```csharp
public string SyncRepo { get; set; }
```

- *Type:* string

The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_repo GkeHubFeatureMembership#sync_repo}

---

##### `SyncWaitSecs`<sup>Optional</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci.property.syncWaitSecs"></a>

```csharp
public string SyncWaitSecs { get; set; }
```

- *Type:* string

Period in seconds(int64 format) between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#sync_wait_secs GkeHubFeatureMembership#sync_wait_secs}

---

### GkeHubFeatureMembershipConfigmanagementHierarchyController <a name="GkeHubFeatureMembershipConfigmanagementHierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementHierarchyController {
    object Enabled = null,
    object EnableHierarchicalResourceQuota = null,
    object EnablePodTreeLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enabled">Enabled</a></code> | <code>object</code> | Whether Hierarchy Controller is enabled in this cluster. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enableHierarchicalResourceQuota">EnableHierarchicalResourceQuota</a></code> | <code>object</code> | Whether hierarchical resource quota is enabled in this cluster. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enablePodTreeLabels">EnablePodTreeLabels</a></code> | <code>object</code> | Whether pod tree labels are enabled in this cluster. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether Hierarchy Controller is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}

---

##### `EnableHierarchicalResourceQuota`<sup>Optional</sup> <a name="EnableHierarchicalResourceQuota" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enableHierarchicalResourceQuota"></a>

```csharp
public object EnableHierarchicalResourceQuota { get; set; }
```

- *Type:* object

Whether hierarchical resource quota is enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#enable_hierarchical_resource_quota GkeHubFeatureMembership#enable_hierarchical_resource_quota}

---

##### `EnablePodTreeLabels`<sup>Optional</sup> <a name="EnablePodTreeLabels" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController.property.enablePodTreeLabels"></a>

```csharp
public object EnablePodTreeLabels { get; set; }
```

- *Type:* object

Whether pod tree labels are enabled in this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#enable_pod_tree_labels GkeHubFeatureMembership#enable_pod_tree_labels}

---

### GkeHubFeatureMembershipConfigmanagementPolicyController <a name="GkeHubFeatureMembershipConfigmanagementPolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementPolicyController {
    string AuditIntervalSeconds = null,
    object Enabled = null,
    string[] ExemptableNamespaces = null,
    object LogDeniesEnabled = null,
    GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring Monitoring = null,
    object MutationEnabled = null,
    object ReferentialRulesEnabled = null,
    object TemplateLibraryInstalled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.auditIntervalSeconds">AuditIntervalSeconds</a></code> | <code>string</code> | Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.enabled">Enabled</a></code> | <code>object</code> | Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.exemptableNamespaces">ExemptableNamespaces</a></code> | <code>string[]</code> | The set of namespaces that are excluded from Policy Controller checks. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.logDeniesEnabled">LogDeniesEnabled</a></code> | <code>object</code> | Logs all denies and dry run failures. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.mutationEnabled">MutationEnabled</a></code> | <code>object</code> | Enable or disable mutation in policy controller. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.referentialRulesEnabled">ReferentialRulesEnabled</a></code> | <code>object</code> | Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.templateLibraryInstalled">TemplateLibraryInstalled</a></code> | <code>object</code> | Installs the default template library along with Policy Controller. |

---

##### `AuditIntervalSeconds`<sup>Optional</sup> <a name="AuditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.auditIntervalSeconds"></a>

```csharp
public string AuditIntervalSeconds { get; set; }
```

- *Type:* string

Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#audit_interval_seconds GkeHubFeatureMembership#audit_interval_seconds}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}

---

##### `ExemptableNamespaces`<sup>Optional</sup> <a name="ExemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.exemptableNamespaces"></a>

```csharp
public string[] ExemptableNamespaces { get; set; }
```

- *Type:* string[]

The set of namespaces that are excluded from Policy Controller checks.

Namespaces do not need to currently exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#exemptable_namespaces GkeHubFeatureMembership#exemptable_namespaces}

---

##### `LogDeniesEnabled`<sup>Optional</sup> <a name="LogDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.logDeniesEnabled"></a>

```csharp
public object LogDeniesEnabled { get; set; }
```

- *Type:* object

Logs all denies and dry run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#log_denies_enabled GkeHubFeatureMembership#log_denies_enabled}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.monitoring"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring Monitoring { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#monitoring GkeHubFeatureMembership#monitoring}

---

##### `MutationEnabled`<sup>Optional</sup> <a name="MutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.mutationEnabled"></a>

```csharp
public object MutationEnabled { get; set; }
```

- *Type:* object

Enable or disable mutation in policy controller.

If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#mutation_enabled GkeHubFeatureMembership#mutation_enabled}

---

##### `ReferentialRulesEnabled`<sup>Optional</sup> <a name="ReferentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.referentialRulesEnabled"></a>

```csharp
public object ReferentialRulesEnabled { get; set; }
```

- *Type:* object

Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#referential_rules_enabled GkeHubFeatureMembership#referential_rules_enabled}

---

##### `TemplateLibraryInstalled`<sup>Optional</sup> <a name="TemplateLibraryInstalled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController.property.templateLibraryInstalled"></a>

```csharp
public object TemplateLibraryInstalled { get; set; }
```

- *Type:* object

Installs the default template library along with Policy Controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#template_library_installed GkeHubFeatureMembership#template_library_installed}

---

### GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring <a name="GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring {
    string[] Backends = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.property.backends">Backends</a></code> | <code>string[]</code> | Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export. |

---

##### `Backends`<sup>Optional</sup> <a name="Backends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring.property.backends"></a>

```csharp
public string[] Backends { get; set; }
```

- *Type:* string[]

Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#backends GkeHubFeatureMembership#backends}

---

### GkeHubFeatureMembershipMesh <a name="GkeHubFeatureMembershipMesh" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipMesh {
    string ControlPlane = null,
    string Management = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.controlPlane">ControlPlane</a></code> | <code>string</code> | **DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.management">Management</a></code> | <code>string</code> | Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL. |

---

##### `ControlPlane`<sup>Optional</sup> <a name="ControlPlane" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.controlPlane"></a>

```csharp
public string ControlPlane { get; set; }
```

- *Type:* string

**DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#control_plane GkeHubFeatureMembership#control_plane}

---

##### `Management`<sup>Optional</sup> <a name="Management" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh.property.management"></a>

```csharp
public string Management { get; set; }
```

- *Type:* string

Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#management GkeHubFeatureMembership#management}

---

### GkeHubFeatureMembershipTimeouts <a name="GkeHubFeatureMembershipTimeouts" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#create GkeHubFeatureMembership#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#delete GkeHubFeatureMembership#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#update GkeHubFeatureMembership#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#create GkeHubFeatureMembership#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#delete GkeHubFeatureMembership#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/gke_hub_feature_membership#update GkeHubFeatureMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference <a name="GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference.property.internalValue"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementBinauthz InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

---


### GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail">ResetGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy">ResetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetPolicyDir">ResetPolicyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncBranch">ResetSyncBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRepo">ResetSyncRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRev">ResetSyncRev</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs">ResetSyncWaitSecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpServiceAccountEmail` <a name="ResetGcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail"></a>

```csharp
private void ResetGcpServiceAccountEmail()
```

##### `ResetHttpsProxy` <a name="ResetHttpsProxy" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy"></a>

```csharp
private void ResetHttpsProxy()
```

##### `ResetPolicyDir` <a name="ResetPolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetPolicyDir"></a>

```csharp
private void ResetPolicyDir()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSecretType"></a>

```csharp
private void ResetSecretType()
```

##### `ResetSyncBranch` <a name="ResetSyncBranch" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncBranch"></a>

```csharp
private void ResetSyncBranch()
```

##### `ResetSyncRepo` <a name="ResetSyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRepo"></a>

```csharp
private void ResetSyncRepo()
```

##### `ResetSyncRev` <a name="ResetSyncRev" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncRev"></a>

```csharp
private void ResetSyncRev()
```

##### `ResetSyncWaitSecs` <a name="ResetSyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs"></a>

```csharp
private void ResetSyncWaitSecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput">GcpServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput">HttpsProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDirInput">PolicyDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput">SecretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput">SyncBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput">SyncRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRevInput">SyncRevInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput">SyncWaitSecsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxy">HttpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDir">PolicyDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranch">SyncBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepo">SyncRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRev">SyncRev</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmailInput`<sup>Optional</sup> <a name="GcpServiceAccountEmailInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput"></a>

```csharp
public string GcpServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `HttpsProxyInput`<sup>Optional</sup> <a name="HttpsProxyInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput"></a>

```csharp
public string HttpsProxyInput { get; }
```

- *Type:* string

---

##### `PolicyDirInput`<sup>Optional</sup> <a name="PolicyDirInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDirInput"></a>

```csharp
public string PolicyDirInput { get; }
```

- *Type:* string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput"></a>

```csharp
public string SecretTypeInput { get; }
```

- *Type:* string

---

##### `SyncBranchInput`<sup>Optional</sup> <a name="SyncBranchInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput"></a>

```csharp
public string SyncBranchInput { get; }
```

- *Type:* string

---

##### `SyncRepoInput`<sup>Optional</sup> <a name="SyncRepoInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput"></a>

```csharp
public string SyncRepoInput { get; }
```

- *Type:* string

---

##### `SyncRevInput`<sup>Optional</sup> <a name="SyncRevInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRevInput"></a>

```csharp
public string SyncRevInput { get; }
```

- *Type:* string

---

##### `SyncWaitSecsInput`<sup>Optional</sup> <a name="SyncWaitSecsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput"></a>

```csharp
public string SyncWaitSecsInput { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; }
```

- *Type:* string

---

##### `HttpsProxy`<sup>Required</sup> <a name="HttpsProxy" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.httpsProxy"></a>

```csharp
public string HttpsProxy { get; }
```

- *Type:* string

---

##### `PolicyDir`<sup>Required</sup> <a name="PolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.policyDir"></a>

```csharp
public string PolicyDir { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `SyncBranch`<sup>Required</sup> <a name="SyncBranch" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncBranch"></a>

```csharp
public string SyncBranch { get; }
```

- *Type:* string

---

##### `SyncRepo`<sup>Required</sup> <a name="SyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRepo"></a>

```csharp
public string SyncRepo { get; }
```

- *Type:* string

---

##### `SyncRev`<sup>Required</sup> <a name="SyncRev" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncRev"></a>

```csharp
public string SyncRev { get; }
```

- *Type:* string

---

##### `SyncWaitSecs`<sup>Required</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs"></a>

```csharp
public string SyncWaitSecs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference.property.internalValue"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSyncGit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---


### GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail">ResetGcpServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetPolicyDir">ResetPolicyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSecretType">ResetSecretType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncRepo">ResetSyncRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs">ResetSyncWaitSecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpServiceAccountEmail` <a name="ResetGcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail"></a>

```csharp
private void ResetGcpServiceAccountEmail()
```

##### `ResetPolicyDir` <a name="ResetPolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetPolicyDir"></a>

```csharp
private void ResetPolicyDir()
```

##### `ResetSecretType` <a name="ResetSecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSecretType"></a>

```csharp
private void ResetSecretType()
```

##### `ResetSyncRepo` <a name="ResetSyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncRepo"></a>

```csharp
private void ResetSyncRepo()
```

##### `ResetSyncWaitSecs` <a name="ResetSyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs"></a>

```csharp
private void ResetSyncWaitSecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput">GcpServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDirInput">PolicyDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput">SecretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput">SyncRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput">SyncWaitSecsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail">GcpServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDir">PolicyDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepo">SyncRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs">SyncWaitSecs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmailInput`<sup>Optional</sup> <a name="GcpServiceAccountEmailInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput"></a>

```csharp
public string GcpServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `PolicyDirInput`<sup>Optional</sup> <a name="PolicyDirInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDirInput"></a>

```csharp
public string PolicyDirInput { get; }
```

- *Type:* string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput"></a>

```csharp
public string SecretTypeInput { get; }
```

- *Type:* string

---

##### `SyncRepoInput`<sup>Optional</sup> <a name="SyncRepoInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput"></a>

```csharp
public string SyncRepoInput { get; }
```

- *Type:* string

---

##### `SyncWaitSecsInput`<sup>Optional</sup> <a name="SyncWaitSecsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput"></a>

```csharp
public string SyncWaitSecsInput { get; }
```

- *Type:* string

---

##### `GcpServiceAccountEmail`<sup>Required</sup> <a name="GcpServiceAccountEmail" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail"></a>

```csharp
public string GcpServiceAccountEmail { get; }
```

- *Type:* string

---

##### `PolicyDir`<sup>Required</sup> <a name="PolicyDir" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.policyDir"></a>

```csharp
public string PolicyDir { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `SyncRepo`<sup>Required</sup> <a name="SyncRepo" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncRepo"></a>

```csharp
public string SyncRepo { get; }
```

- *Type:* string

---

##### `SyncWaitSecs`<sup>Required</sup> <a name="SyncWaitSecs" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs"></a>

```csharp
public string SyncWaitSecs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference.property.internalValue"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSyncOci InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---


### GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference <a name="GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit">PutGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci">PutOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetGit">ResetGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetOci">ResetOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetPreventDrift">ResetPreventDrift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetSourceFormat">ResetSourceFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGit` <a name="PutGit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit"></a>

```csharp
private void PutGit(GkeHubFeatureMembershipConfigmanagementConfigSyncGit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putGit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---

##### `PutOci` <a name="PutOci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci"></a>

```csharp
private void PutOci(GkeHubFeatureMembershipConfigmanagementConfigSyncOci Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.putOci.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---

##### `ResetGit` <a name="ResetGit" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetGit"></a>

```csharp
private void ResetGit()
```

##### `ResetOci` <a name="ResetOci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetOci"></a>

```csharp
private void ResetOci()
```

##### `ResetPreventDrift` <a name="ResetPreventDrift" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetPreventDrift"></a>

```csharp
private void ResetPreventDrift()
```

##### `ResetSourceFormat` <a name="ResetSourceFormat" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.resetSourceFormat"></a>

```csharp
private void ResetSourceFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.git">Git</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.oci">Oci</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.gitInput">GitInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.ociInput">OciInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDriftInput">PreventDriftInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormatInput">SourceFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDrift">PreventDrift</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormat">SourceFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Git`<sup>Required</sup> <a name="Git" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.git"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference Git { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference</a>

---

##### `Oci`<sup>Required</sup> <a name="Oci" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.oci"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference Oci { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference</a>

---

##### `GitInput`<sup>Optional</sup> <a name="GitInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.gitInput"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSyncGit GitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncGit">GkeHubFeatureMembershipConfigmanagementConfigSyncGit</a>

---

##### `OciInput`<sup>Optional</sup> <a name="OciInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.ociInput"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSyncOci OciInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOci">GkeHubFeatureMembershipConfigmanagementConfigSyncOci</a>

---

##### `PreventDriftInput`<sup>Optional</sup> <a name="PreventDriftInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDriftInput"></a>

```csharp
public object PreventDriftInput { get; }
```

- *Type:* object

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormatInput"></a>

```csharp
public string SourceFormatInput { get; }
```

- *Type:* string

---

##### `PreventDrift`<sup>Required</sup> <a name="PreventDrift" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.preventDrift"></a>

```csharp
public object PreventDrift { get; }
```

- *Type:* object

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.sourceFormat"></a>

```csharp
public string SourceFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference.property.internalValue"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSync InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

---


### GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference <a name="GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnableHierarchicalResourceQuota">ResetEnableHierarchicalResourceQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnablePodTreeLabels">ResetEnablePodTreeLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnableHierarchicalResourceQuota` <a name="ResetEnableHierarchicalResourceQuota" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnableHierarchicalResourceQuota"></a>

```csharp
private void ResetEnableHierarchicalResourceQuota()
```

##### `ResetEnablePodTreeLabels` <a name="ResetEnablePodTreeLabels" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.resetEnablePodTreeLabels"></a>

```csharp
private void ResetEnablePodTreeLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuotaInput">EnableHierarchicalResourceQuotaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabelsInput">EnablePodTreeLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuota">EnableHierarchicalResourceQuota</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabels">EnablePodTreeLabels</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EnableHierarchicalResourceQuotaInput`<sup>Optional</sup> <a name="EnableHierarchicalResourceQuotaInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuotaInput"></a>

```csharp
public object EnableHierarchicalResourceQuotaInput { get; }
```

- *Type:* object

---

##### `EnablePodTreeLabelsInput`<sup>Optional</sup> <a name="EnablePodTreeLabelsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabelsInput"></a>

```csharp
public object EnablePodTreeLabelsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EnableHierarchicalResourceQuota`<sup>Required</sup> <a name="EnableHierarchicalResourceQuota" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enableHierarchicalResourceQuota"></a>

```csharp
public object EnableHierarchicalResourceQuota { get; }
```

- *Type:* object

---

##### `EnablePodTreeLabels`<sup>Required</sup> <a name="EnablePodTreeLabels" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.enablePodTreeLabels"></a>

```csharp
public object EnablePodTreeLabels { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference.property.internalValue"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementHierarchyController InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---


### GkeHubFeatureMembershipConfigmanagementOutputReference <a name="GkeHubFeatureMembershipConfigmanagementOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz">PutBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync">PutConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController">PutHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController">PutPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetBinauthz">ResetBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetConfigSync">ResetConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetHierarchyController">ResetHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetPolicyController">ResetPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBinauthz` <a name="PutBinauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz"></a>

```csharp
private void PutBinauthz(GkeHubFeatureMembershipConfigmanagementBinauthz Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putBinauthz.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

---

##### `PutConfigSync` <a name="PutConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync"></a>

```csharp
private void PutConfigSync(GkeHubFeatureMembershipConfigmanagementConfigSync Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putConfigSync.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

---

##### `PutHierarchyController` <a name="PutHierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController"></a>

```csharp
private void PutHierarchyController(GkeHubFeatureMembershipConfigmanagementHierarchyController Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putHierarchyController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---

##### `PutPolicyController` <a name="PutPolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController"></a>

```csharp
private void PutPolicyController(GkeHubFeatureMembershipConfigmanagementPolicyController Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.putPolicyController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

---

##### `ResetBinauthz` <a name="ResetBinauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetBinauthz"></a>

```csharp
private void ResetBinauthz()
```

##### `ResetConfigSync` <a name="ResetConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetConfigSync"></a>

```csharp
private void ResetConfigSync()
```

##### `ResetHierarchyController` <a name="ResetHierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetHierarchyController"></a>

```csharp
private void ResetHierarchyController()
```

##### `ResetPolicyController` <a name="ResetPolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetPolicyController"></a>

```csharp
private void ResetPolicyController()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthz">Binauthz</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference">GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSync">ConfigSync</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyController">HierarchyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyController">PolicyController</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthzInput">BinauthzInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSyncInput">ConfigSyncInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyControllerInput">HierarchyControllerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyControllerInput">PolicyControllerInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Binauthz`<sup>Required</sup> <a name="Binauthz" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthz"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference Binauthz { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference">GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference</a>

---

##### `ConfigSync`<sup>Required</sup> <a name="ConfigSync" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSync"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference ConfigSync { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference">GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference</a>

---

##### `HierarchyController`<sup>Required</sup> <a name="HierarchyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyController"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference HierarchyController { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference</a>

---

##### `PolicyController`<sup>Required</sup> <a name="PolicyController" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyController"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference PolicyController { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference</a>

---

##### `BinauthzInput`<sup>Optional</sup> <a name="BinauthzInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.binauthzInput"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementBinauthz BinauthzInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementBinauthz">GkeHubFeatureMembershipConfigmanagementBinauthz</a>

---

##### `ConfigSyncInput`<sup>Optional</sup> <a name="ConfigSyncInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.configSyncInput"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementConfigSync ConfigSyncInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementConfigSync">GkeHubFeatureMembershipConfigmanagementConfigSync</a>

---

##### `HierarchyControllerInput`<sup>Optional</sup> <a name="HierarchyControllerInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.hierarchyControllerInput"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementHierarchyController HierarchyControllerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementHierarchyController">GkeHubFeatureMembershipConfigmanagementHierarchyController</a>

---

##### `PolicyControllerInput`<sup>Optional</sup> <a name="PolicyControllerInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.policyControllerInput"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementPolicyController PolicyControllerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementOutputReference.property.internalValue"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagement">GkeHubFeatureMembershipConfigmanagement</a>

---


### GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference <a name="GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resetBackends">ResetBackends</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackends` <a name="ResetBackends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.resetBackends"></a>

```csharp
private void ResetBackends()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backendsInput">BackendsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backends">Backends</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendsInput`<sup>Optional</sup> <a name="BackendsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backendsInput"></a>

```csharp
public string[] BackendsInput { get; }
```

- *Type:* string[]

---

##### `Backends`<sup>Required</sup> <a name="Backends" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.backends"></a>

```csharp
public string[] Backends { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference.property.internalValue"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---


### GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference <a name="GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring">PutMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetAuditIntervalSeconds">ResetAuditIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetExemptableNamespaces">ResetExemptableNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetLogDeniesEnabled">ResetLogDeniesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMutationEnabled">ResetMutationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetReferentialRulesEnabled">ResetReferentialRulesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetTemplateLibraryInstalled">ResetTemplateLibraryInstalled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitoring` <a name="PutMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring"></a>

```csharp
private void PutMonitoring(GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---

##### `ResetAuditIntervalSeconds` <a name="ResetAuditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetAuditIntervalSeconds"></a>

```csharp
private void ResetAuditIntervalSeconds()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetExemptableNamespaces` <a name="ResetExemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetExemptableNamespaces"></a>

```csharp
private void ResetExemptableNamespaces()
```

##### `ResetLogDeniesEnabled` <a name="ResetLogDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetLogDeniesEnabled"></a>

```csharp
private void ResetLogDeniesEnabled()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetMutationEnabled` <a name="ResetMutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetMutationEnabled"></a>

```csharp
private void ResetMutationEnabled()
```

##### `ResetReferentialRulesEnabled` <a name="ResetReferentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetReferentialRulesEnabled"></a>

```csharp
private void ResetReferentialRulesEnabled()
```

##### `ResetTemplateLibraryInstalled` <a name="ResetTemplateLibraryInstalled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.resetTemplateLibraryInstalled"></a>

```csharp
private void ResetTemplateLibraryInstalled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSecondsInput">AuditIntervalSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespacesInput">ExemptableNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabledInput">LogDeniesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoringInput">MonitoringInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabledInput">MutationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabledInput">ReferentialRulesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalledInput">TemplateLibraryInstalledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSeconds">AuditIntervalSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespaces">ExemptableNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabled">LogDeniesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabled">MutationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabled">ReferentialRulesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalled">TemplateLibraryInstalled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoring"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference Monitoring { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference</a>

---

##### `AuditIntervalSecondsInput`<sup>Optional</sup> <a name="AuditIntervalSecondsInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSecondsInput"></a>

```csharp
public string AuditIntervalSecondsInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExemptableNamespacesInput`<sup>Optional</sup> <a name="ExemptableNamespacesInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespacesInput"></a>

```csharp
public string[] ExemptableNamespacesInput { get; }
```

- *Type:* string[]

---

##### `LogDeniesEnabledInput`<sup>Optional</sup> <a name="LogDeniesEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabledInput"></a>

```csharp
public object LogDeniesEnabledInput { get; }
```

- *Type:* object

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.monitoringInput"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring MonitoringInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring">GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring</a>

---

##### `MutationEnabledInput`<sup>Optional</sup> <a name="MutationEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabledInput"></a>

```csharp
public object MutationEnabledInput { get; }
```

- *Type:* object

---

##### `ReferentialRulesEnabledInput`<sup>Optional</sup> <a name="ReferentialRulesEnabledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabledInput"></a>

```csharp
public object ReferentialRulesEnabledInput { get; }
```

- *Type:* object

---

##### `TemplateLibraryInstalledInput`<sup>Optional</sup> <a name="TemplateLibraryInstalledInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalledInput"></a>

```csharp
public object TemplateLibraryInstalledInput { get; }
```

- *Type:* object

---

##### `AuditIntervalSeconds`<sup>Required</sup> <a name="AuditIntervalSeconds" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.auditIntervalSeconds"></a>

```csharp
public string AuditIntervalSeconds { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `ExemptableNamespaces`<sup>Required</sup> <a name="ExemptableNamespaces" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.exemptableNamespaces"></a>

```csharp
public string[] ExemptableNamespaces { get; }
```

- *Type:* string[]

---

##### `LogDeniesEnabled`<sup>Required</sup> <a name="LogDeniesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.logDeniesEnabled"></a>

```csharp
public object LogDeniesEnabled { get; }
```

- *Type:* object

---

##### `MutationEnabled`<sup>Required</sup> <a name="MutationEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.mutationEnabled"></a>

```csharp
public object MutationEnabled { get; }
```

- *Type:* object

---

##### `ReferentialRulesEnabled`<sup>Required</sup> <a name="ReferentialRulesEnabled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.referentialRulesEnabled"></a>

```csharp
public object ReferentialRulesEnabled { get; }
```

- *Type:* object

---

##### `TemplateLibraryInstalled`<sup>Required</sup> <a name="TemplateLibraryInstalled" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.templateLibraryInstalled"></a>

```csharp
public object TemplateLibraryInstalled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference.property.internalValue"></a>

```csharp
public GkeHubFeatureMembershipConfigmanagementPolicyController InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipConfigmanagementPolicyController">GkeHubFeatureMembershipConfigmanagementPolicyController</a>

---


### GkeHubFeatureMembershipMeshOutputReference <a name="GkeHubFeatureMembershipMeshOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipMeshOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetControlPlane">ResetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetManagement">ResetManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControlPlane` <a name="ResetControlPlane" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetControlPlane"></a>

```csharp
private void ResetControlPlane()
```

##### `ResetManagement` <a name="ResetManagement" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.resetManagement"></a>

```csharp
private void ResetManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlaneInput">ControlPlaneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.managementInput">ManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlane">ControlPlane</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.management">Management</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlaneInput"></a>

```csharp
public string ControlPlaneInput { get; }
```

- *Type:* string

---

##### `ManagementInput`<sup>Optional</sup> <a name="ManagementInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.managementInput"></a>

```csharp
public string ManagementInput { get; }
```

- *Type:* string

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.controlPlane"></a>

```csharp
public string ControlPlane { get; }
```

- *Type:* string

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.management"></a>

```csharp
public string Management { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMeshOutputReference.property.internalValue"></a>

```csharp
public GkeHubFeatureMembershipMesh InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipMesh">GkeHubFeatureMembershipMesh</a>

---


### GkeHubFeatureMembershipTimeoutsOutputReference <a name="GkeHubFeatureMembershipTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubFeatureMembershipTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubFeatureMembership.GkeHubFeatureMembershipTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



